const express = require('express');
const downloadRoute = require('./download.route');
/*
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
*/

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

/*
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
*/

router.use('/download', downloadRoute);

module.exports = router;
