const express = require('express');
const router = express.Router();

const photos = require('../controllers/photos.controller');
const votes = require('../controllers/votes.controller');

router.get('/photos', photos.loadAll);
router.post('/photos', photos.add);
router.put('/photos/vote/:id', photos.vote);

module.exports = router;
