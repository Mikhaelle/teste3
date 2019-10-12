const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    var user = req.query.user;
    var password = req.query.password;
    var syscoin = "\"syscoin\"";
    var meEscolhe = "\"meEscolhe\"";

    if( user == syscoin && password == meEscolhe ){
        res.status(200).json({
            menssagem: 'Meu nome completo é Mikhaelle de C Bueno. Eu quero essa vaga !'
        });
    }else{
        res.status(200).json({
            menssagem: 'Credenciais erradas.'
        });
    }
});
module.exports = router;