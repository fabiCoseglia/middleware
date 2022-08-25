const express = require('express');
const router = express.Router();
const{index, about, contact,admin,login}=require('../controllers/mainController');
const {accessAdmin} = require('../middlewares/userLogs')

// Roots //
router
    .get('/',index)
    .get('/about',about)
    .get('/contact',contact)
    .get ('/admin',accessAdmin,admin)
    .get ('/login',login)
    
module.exports = router;