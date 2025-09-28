const express = require('express');
const router = express.Router();

const profiles = [
  { nim: 'F1D022085', nama: 'Nurul Fatimah', jurusan: 'Teknik Informatika' },
  { nim: 'F1D022100', nama: 'Lee Heeseung', jurusan: 'Sistem Informasi' },
  { nim: 'F1D022101', nama: 'Lan Wangji', jurusan: 'Teknik Informatika' }
];


router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:nim', (req, res) => {
  const { nim } = req.params;
  const profile = profiles.find(p => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;
