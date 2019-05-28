const express = require('express');
const path = require('path');
const asyncHandler = require('express-async-handler');

const router = express.Router();
module.exports = router;


router.route('/')
  .get(asyncHandler(download));


async function download(req, res) {
    var file = path.join(__dirname, '../downloads/webcv.pdf');

    console.log(file);

    
    res.setHeader('Content-disposition', 'attachment; filename=nsvitek_cv');
    res.setHeader('Content-type', "application/octet-stream");
    res.download(file); // Set disposition and send it.
}