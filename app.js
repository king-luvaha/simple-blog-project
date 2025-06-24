const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const auth = require('basic-auth');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));



// Articles directory
const ARTICLES_DIR = path.join(__dirname, 'articles');

// Ensure articles directory exists
(async () => {
  try {
    await fs.mkdir(ARTICLES_DIR, { recursive: true });
  } catch (err) {
    console.error('Error creating articles directory:', err);
  }
})();

// Basic authentication middleware for admin routes
const adminAuth = (req, res, next) => {
  const credentials = auth(req);
  
  // Replace with your actual username and password
  const validUsername = 'admin';
  const validPassword = 'password123';
  
  if (!credentials || 
      credentials.name !== validUsername || 
      credentials.pass !== validPassword) {
    res.set('WWW-Authenticate', 'Basic realm="Admin Access"');
    return res.status(401).send('Authentication required');
  }
  
  next();
};

// Guest Routes
app.get('/', async (req, res) => {
  try {
    const files = await fs.readdir(ARTICLES_DIR);
    const articles = await Promise.all(
      files.map(async file => {
        const content = await fs.readFile(path.join(ARTICLES_DIR, file), 'utf8');
        return JSON.parse(content);
      })
    );
    res.render('guest/home', { articles });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading articles');
  }
});

app.get('/article/:id', async (req, res) => {
  try {
    const filePath = path.join(ARTICLES_DIR, `${req.params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const article = JSON.parse(content);
    res.render('guest/article', { article });
  } catch (err) {
    console.error(err);
    res.status(404).send('Article not found');
  }
});

// Admin Routes
app.get('/admin', adminAuth, async (req, res) => {
  try {
    const files = await fs.readdir(ARTICLES_DIR);
    const articles = await Promise.all(
      files.map(async file => {
        const content = await fs.readFile(path.join(ARTICLES_DIR, file), 'utf8');
        return { ...JSON.parse(content), id: path.basename(file, '.json') };
      })
    );
    res.render('admin/dashboard', { articles });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading articles');
  }
});

app.get('/admin/add', adminAuth, (req, res) => {
  res.render('admin/add-article');
});

app.post('/admin/add', adminAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const id = Date.now().toString();
    const date = new Date().toISOString();
    
    const article = { id, title, content, date };
    await fs.writeFile(
      path.join(ARTICLES_DIR, `${id}.json`),
      JSON.stringify(article, null, 2)
    );
    
    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving article');
  }
});

app.get('/admin/edit/:id', adminAuth, async (req, res) => {
  try {
    const filePath = path.join(ARTICLES_DIR, `${req.params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const article = JSON.parse(content);
    res.render('admin/edit-article', { article });
  } catch (err) {
    console.error(err);
    res.status(404).send('Article not found');
  }
});

app.post('/admin/edit/:id', adminAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const filePath = path.join(ARTICLES_DIR, `${req.params.id}.json`);
    const existingContent = await fs.readFile(filePath, 'utf8');
    const existingArticle = JSON.parse(existingContent);
    
    const updatedArticle = {
      ...existingArticle,
      title,
      content,
      date: existingArticle.date // Keep original date
    };
    
    await fs.writeFile(filePath, JSON.stringify(updatedArticle, null, 2));
    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating article');
  }
});

app.post('/admin/delete/:id', adminAuth, async (req, res) => {
  try {
    await fs.unlink(path.join(ARTICLES_DIR, `${req.params.id}.json`));
    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting article');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});