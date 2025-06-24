# Personal Blog Application

A simple, file-based blog application built with Node.js, Express, and EJS. This application allows you to create, edit, and manage blog articles through an admin interface while providing a clean public view for readers.

## Features

- **Public Blog Interface**: Clean, responsive design for reading articles
- **Admin Dashboard**: Secure admin panel for managing articles
- **CRUD Operations**: Create, read, update, and delete articles
- **File-based Storage**: Articles stored as JSON files (no database required)
- **Basic Authentication**: Simple HTTP Basic Auth for admin access
- **Responsive Design**: Works well on desktop and mobile devices

## Project Structure

```
/blog-project/
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── images/                # Static images directory
├── views/
│   ├── guest/
│   │   ├── home.ejs          # Public homepage
│   │   └── article.ejs       # Individual article view
│   └── admin/
│       ├── dashboard.ejs     # Admin dashboard
│       ├── add-article.ejs   # Add new article form
│       └── edit-article.ejs  # Edit article form
├── articles/                  # JSON files for articles (auto-created)
├── app.js                    # Main application file
├── package.json              # Node.js dependencies
└── .gitignore               # Git ignore file
```

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
- **npm** (usually comes with Node.js)

You can check if Node.js and npm are installed by running:

```bash
node --version
npm --version
```

## Installation

1. **Clone or download the project**
    
    ```bash
    git clone <your-repository-url>
    cd simple-blog-project
    ```
    
2. **Install package.json file**
    
    ```bash
    npm init -y
    ```
    
3. **Create package.json** (if not already present)
    
    ```json
    {
      "name": "personal-blog",
      "version": "1.0.0",
      "description": "A simple file-based blog application",
      "main": "app.js",
      "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
      },
      "dependencies": {
        "express": "^4.18.2",
        "ejs": "^3.1.9",
        "basic-auth": "^2.0.1",
        "body-parser": "^1.20.2"
      },
      "devDependencies": {
        "nodemon": "^3.0.1"
      },
      "keywords": ["blog", "express", "ejs", "nodejs"],
      "author": "Your Name",
      "license": "MIT"
    }
    ```
    
4. **Install the required dependencies**
    
    ```bash
    npm install express ejs basic-auth body-parser
    ```
    
5. **Optional: Install nodemon for development**
    
    ```bash
    npm install --save-dev nodemon
    ```
    

## Configuration

### Admin Credentials

The default admin credentials are set in `app.js`:

- **Username**: `admin`
- **Password**: `password123`

**⚠️ IMPORTANT**: Change these credentials before deploying to production!

To change the admin credentials, edit lines 25-26 in `app.js`:

```javascript
const validUsername = 'your-username';
const validPassword = 'your-secure-password';
```

### Port Configuration

The application runs on port 3000 by default. You can change this by:

- Setting the `PORT` environment variable: `PORT=8080 npm start`
- Or modifying line 7 in `app.js`: `const PORT = process.env.PORT || 8080;`

## Running the Application

### Development Mode

```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.

### Production Mode

```bash
npm start
```

### Manual Start

```bash
node app.js
```

The application will be available at: `http://localhost:3000`

## Usage

### Public Interface

1. **Homepage**: Visit `http://localhost:3000` to see all published articles
2. **Individual Articles**: Click on any article title to read the full content
3. **Navigation**: Use the "Back to all articles" link to return to the homepage

### Admin Interface

1. **Access Admin Panel**: Visit `http://localhost:3000/admin`
2. **Login**: Enter your admin credentials when prompted
3. **Dashboard**: View all articles in a table format
4. **Add Article**: Click "Add New Article" to create a new blog post
5. **Edit Article**: Click "Edit" next to any article to modify it
6. **Delete Article**: Click "Delete" to remove an article (this action is permanent)

### Article Management

- **Creating Articles**: Fill in the title and content, then click "Publish Article"
- **Editing Articles**: Modify the title and content, then click "Update Article"
- **Deleting Articles**: Confirm deletion by clicking the "Delete" button

### Writing Articles with HTML

The article content field supports HTML formatting. You can use various HTML tags to enhance your articles:

#### Basic Text Formatting

```html
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
<p>You can also use <b>bold</b> and <i>italic</i> tags.</p>
<p>For highlighted text, use <mark>highlighted text</mark>.</p>
<p>Create <u>underlined text</u> or <del>strikethrough text</del>.</p>
```

#### Headings

```html
<h2>Main Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection Heading</h4>
```

#### Lists

```html
<!-- Unordered list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

#### Links and Images

```html
<!-- External link -->
<p>Visit <a href="https://example.com" target="_blank">this website</a>.</p>

<!-- Internal link -->
<p>Read our <a href="/article/123">previous article</a>.</p>

<!-- Images -->
<img src="/images/my-photo.jpg" alt="Description of image" style="max-width: 100%; height: auto;">
```

#### Code Examples

```html
<!-- Inline code -->
<p>Use the <code>console.log()</code> function to debug.</p>

<!-- Code blocks -->
<pre><code>
function hello() {
    console.log("Hello, World!");
}
</code></pre>
```

#### Quotes and Citations

```html
<!-- Blockquote -->
<blockquote>
  <p>This is a famous quote from someone important.</p>
  <cite>- Author Name</cite>
</blockquote>

<!-- Inline quote -->
<p>As they say, <q>practice makes perfect</q>.</p>
```

#### Tables

```html
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>
  </tbody>
</table>
```

#### Line Breaks and Horizontal Rules

```html
<p>This is the first line.<br>This is the second line.</p>
<hr>
<p>Content after a horizontal rule.</p>
```

#### HTML Structure Tips

1. **Always wrap content in paragraphs**: Use `<p>` tags for regular text content
2. **Use semantic HTML**: Choose tags based on meaning (e.g., `<strong>` for important text, `<em>` for emphasis)
3. **Include alt text for images**: Always add descriptive `alt` attributes to images
4. **Open external links in new tabs**: Add `target="_blank"` to external links
5. **Responsive images**: Add `style="max-width: 100%; height: auto;"` to images

#### Example Article Structure

```html
<h2>Introduction</h2>
<p>Welcome to this comprehensive guide on <strong>web development</strong>. In this article, we'll explore various techniques and best practices.</p>

<h3>Getting Started</h3>
<p>First, you'll need to set up your development environment:</p>
<ol>
  <li>Install a code editor like <a href="https://code.visualstudio.com/" target="_blank">VS Code</a></li>
  <li>Set up version control with Git</li>
  <li>Choose a framework or library</li>
</ol>

<h3>Key Concepts</h3>
<p>Here are some important concepts to understand:</p>
<ul>
  <li><strong>HTML</strong>: The structure of web pages</li>
  <li><strong>CSS</strong>: Styling and layout</li>
  <li><strong>JavaScript</strong>: Interactive functionality</li>
</ul>

<blockquote>
  <p>The best way to learn web development is by building real projects.</p>
  <cite>- Experienced Developer</cite>
</blockquote>

<h3>Code Example</h3>
<p>Here's a simple HTML structure:</p>
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>For more information, check out <a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a>.</p>
```

#### Important Notes

- **HTML is rendered**: The blog displays HTML tags as formatted content, not as plain text
- **Test your formatting**: Use the preview feature if available, or publish and check the result
- **Keep it accessible**: Use proper heading hierarchy and descriptive link text
- **Validate your HTML**: Ensure tags are properly closed and nested
- **Security consideration**: Only use trusted HTML - avoid JavaScript or potentially harmful content

## File Storage

Articles are stored as JSON files in the `articles/` directory. Each file contains:

```json
{
  "id": "1640995200000",
  "title": "Article Title",
  "content": "Article content goes here...",
  "date": "2023-12-31T12:00:00.000Z"
}
```

The `articles/` directory is automatically created when the application starts.

## Customization

### Styling

- Modify `public/css/style.css` to change the appearance
- The CSS includes styles for both public and admin interfaces

### Templates

- Guest templates are in `views/guest/`
- Admin templates are in `views/admin/`
- All templates use EJS templating engine

### Adding Images

- Place images in the `public/images/` directory
- Reference them in articles using `/images/filename.jpg`

## Security Considerations

1. **Change Default Credentials**: Always change the default admin username and password
2. **HTTPS**: Use HTTPS in production environments
3. **Input Validation**: Consider adding more robust input validation
4. **File Permissions**: Ensure proper file permissions on the server
5. **Environment Variables**: Use environment variables for sensitive configuration

## Troubleshooting

### Common Issues

1. **Port Already in Use**
    
    - Error: `EADDRINUSE: address already in use :::3000`
    - Solution: Change the port or kill the process using port 3000
2. **Permission Denied**
    
    - Error: Cannot create articles directory
    - Solution: Check file permissions and ensure the application has write access
3. **Articles Not Loading**
    
    - Check if the `articles/` directory exists and is readable
    - Verify JSON file format is correct
4. **Admin Login Not Working**
    
    - Verify username and password in `app.js`
    - Clear browser cache and try again

### Debug Mode

Add console.log statements in `app.js` to debug issues:

```javascript
console.log('Articles loaded:', articles.length);
```

## Deployment

### Local Network Access

To allow access from other devices on your network:

```javascript
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:

1. Check the troubleshooting section above
2. Review the code comments in `app.js`
3. Create an issue in the repository

---

**Note**: This is a simple blog application intended for personal use or small projects. For production use with high traffic, consider using a proper database and implementing additional security measures.