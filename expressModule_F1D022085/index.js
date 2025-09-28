const express = require('express');
const app = express();
const port = 3000;

const math = require('./utils/math');
const profileRouter = require('./routes/profile');

app.get('/', (req, res) => {
  res.send('Nama: Nurul Fatimah <br> NIM: F1D022085');
});

app.get('/hitung', (req, res) => {
  const hasil = math.tambah(5, 10);
  res.send(`Hasil penjumlahan 5 + 10 = ${hasil}`);
});

app.use('/profile', profileRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
