const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('Hello Home');
});

module.exports = router;