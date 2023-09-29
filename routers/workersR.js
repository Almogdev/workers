const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",function (req, res){
    res.render("ManageWorkers",{});
});
router.post("/Add",function(req,res){

    let first_name  =req.body.first_name;
    let last_name    =req.body.last_name;

    let Query = "INSERT INTO employees ";
    Query += "(First_Name, Last_Name) ";
    Query += " VALUES ";
    Query += `('${first_name}','${last_name}') `;

    db_pool.query(Query, function(err, rows){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK",lastId:rows.insertId});
        }

    });
});

router.get("/List",(req, res) => {

    let q="SELECT * FROM `employees` ";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
            // throw err;
        }
        else
        {
            res.status(200).json(rows );
        }
    });
});
router.post("/Edit",(req, res) => {
    let first_name_edit = req.body.first_name_edit;
    let last_name_edit  = req.body.last_name_edit;

    let q="UPDATE `employees` SET `First_Name`='${first_name_edit}',`Last_Name`='${last_name_edit}'";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
            // throw err;
        }
        else
        {
            res.status(200).json(rows );
        }
    });
});
router.post("/Delete",(req, res) => {
    let first_name_delete = req.body.first_name_delete;
    let last_name_delete  = req.body.last_name_delete;

    let q="UPDATE `employees` SET `First_Name`='${first_name_delete}',`Last_Name`='${last_name_delete}'";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
            // throw err;
        }
        else
        {
            res.status(200).json(rows );
        }
    });
});


