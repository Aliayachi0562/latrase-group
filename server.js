const express = require('express');
const path = require('path');
const app = express();

// استخدام المنفذ الذي توفره الاستضافة أو المنفذ المحلي 3000
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});