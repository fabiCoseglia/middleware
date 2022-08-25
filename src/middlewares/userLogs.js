const rs = require('fs');
const path = require('path');

module.exports={
    copyURL: (req,res,next)=>{
        rs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'),`el usuario ingresó a la ruta: ${req.url} \n`);
        next();
    },
    accessAdmin:(req,res,next)=>{
        const admins =['Greta', 'Ada', 'Tim', 'Vim', 'Fabi'];
        if(admins.includes(req.query.user)){
            next();
        }else{
            res.render('rejected');
        }
    }    
}