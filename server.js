const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));