const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",function (req, res){
    res.render("ManageWorkers",{});
});
router.post("/Add",function(req,res){
    let first_name  =req.body.first_name;
    let last_name  =req.body.last_name;

    let q='INSERT INTO `employees` ( `name1`, `name2`) ';
    q += `VALUES ( '${first_name}', '${last_name}')`;

    db_pool.query(q, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK",lastId:rows.insertId});
        }

    });


});


/*router.get("/List",(req, res) => {
    let q = "SELECT * FROM 'employees'";

    db_pool.query(q,function (err, rows, fields){

        if (err)
        {
            res.status(500).json({message: err})
        }
        else {
            res.status(200).json(rows);
        }
    })
})*/
