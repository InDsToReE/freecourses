const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Melayani file statis (jika ada CSS, JS, atau asset lainnya)
app.use(express.static(path.join(__dirname)));

// Menyajikan index.html saat route "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
