const express = require('express');
const router = express.Router();

router.get('/rating');
router.put('/rating');

router.get('/comments');
router.put('/comments');

router.get('/current');
router.get('/history');

module.exports = router;