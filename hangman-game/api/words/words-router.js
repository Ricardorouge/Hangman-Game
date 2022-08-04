const router = require('express').Router()
const words = require('./words-data')

router.get('/',(req,res)=>{
    res.status(200).json(words);
});

module.exports = router