
//const users = require('../models/users');
var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  hoba = mongoose.model('users'); 

module.exports=(router) =>{
    
    router.post('/register' , (req , res)=>{
        
        if(!req.body.email){
            res.json({
                success:false , message: 'nooo'
            });
        }
        else {
            if(!req.body.fullname){
                res.json({
                    success:false , message: 'noo1o'
                    
                });
            }
            else{
                if(!req.body.password){
                    res.json({
                        success:false , message: 'noo2o'
                    });
                }
                else{
                    
                    res.send('hell yeah')

                }
                
            }
            
        }
        let users = new hoba({
            email:req.body.email.toLowerCase(),
            fullname:req.body.fullname.toLowerCase(),
            password:req.body.password
        });
        //users.save((hoba.body));
        
       users.save((err)=>{
            if(err){
               
              
            }
            else{
                users.save((hoba.body));
               // res.json({
                   // success:false , message: 'saved '
               // });
            }
        })
    });
       
    return router;  
}
/*module.exports=(router) =>{
    
    router.get('/login' , (req , res)=>{
        res.json({
             success:false , message: 'here '
         });
         
    });
     
    return router;
}*/