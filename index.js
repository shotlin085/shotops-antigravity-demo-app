const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Antigravity Demo App</title>
        <style>
          body { font-family: sans-serif; text-align: center; margin-top: 50px; background-color: #f0f8ff; color: #333; }
          h1 { color: #0066cc; }
          .version { display: inline-block; padding: 10px 20px; background-color: #28a745; color: white; border-radius: 5px; font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>ShotOps Safe Deploy QA</h1>
        <p>This is a disposable demo application.</p>
        <div class="version">Version v1</div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/version', (req, res) => {
  res.status(200).json({ version: 'v1' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
