const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to serve all static files in the current directory
app.use(express.static(__dirname));

// Send index.html for any incoming request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Demo is running on port ${PORT}`);
});