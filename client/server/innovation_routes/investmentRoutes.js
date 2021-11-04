const pool = require('../config/database.js');
const router = require("express").Router();
// // const storage = require('../config/storage.js');
// const multer = require('multer');



//Get All investment transaction
router.get('/', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('SELECT * from invest_transaction', (err, rows) =>{
            connection.release(); //return the connection to pool
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
        });

    });
});


//Get Investment by ID
router.get('/:id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('SELECT * from invest_transaction WHERE invest_id = ?',[req.params.id], (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
        });

    });
});


//Delete Investment by ID
router.delete('/:id', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        //query
        connection.query('DELETE from invest_transaction WHERE invest_id = ?',[req.params.id], (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(`Investment Transaction with the invest_id: ${req.params.id} has been removed`);
            } else {
                console.log(err);
            }
        });

    });
});

//Add an Investment 
router.post('/', (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err 
        console.log(`connected as id ${connection.threadId}`);
        
        const params = req.body;
        
        //query
        connection.query('INSERT INTO invest_transaction SET ?',params, (err, rows) =>{
            connection.release(); //return the connection to pool
            
            if(!err){
                res.send(`Investment Transaction with the investment_id: ${params.invest_id} has been added`);
            } else {
                console.log(err);
            }
        });
        console.log(req.body);

    });
});

// router.put('/imageupload', (req,res) => {
//     pool.getConnection((err, connection) => {
//         try {
//             // 'avatar' is the name of our file input field in the HTML form
    
//             let upload = multer({ storage: storage}).single('avatar');
    
//             upload(req, res, function(err) {
//                 // req.file contains information of uploaded file
//                 // req.body contains information of text fields
    
//                 if (!req.file) {
//                     return res.send('Please select an image to upload');
//                 }
//                 else if (err instanceof multer.MulterError) {
//                     return res.send(err);
//                 }
//                 else if (err) {
//                     return res.send(err);
//                 }
    
//                 const classifiedsadd = {
//                     invest_proofPayment: req.file.filename,
//                 };
//                 console.log(req.file.filename);
//                 console.log(classifiedsadd);
//                 const sql = "UPDATE invest_transaction SET invest_proofPayment = ? WHERE invest_id = 2";
//                 connection.query(sql, classifiedsadd.invest_proofPayment, (err, results) => { 
//                     if (err) throw err;
//                     res.json({ success: 1 });
//                     connection.release();       
//                 });  
    
//             }); 
    
//         }catch (err) {console.log(err)}

//     })
// });


module.exports = router;