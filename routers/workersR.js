const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",function (req, res){
    res.render("ManageWorkers",{title: "hello"});
});
router.post("/Add",function (req,res){
    let {first_name,last_name} = req.body;
    // let name        =req.body.name;
    // let due_date    =req.body.due_date;
    // let done_date   =req.body.done_date;
    // let category_id =req.body.category_id;
    // let owner_id    =req.body.owner_id;
    // let creator_id  =req.body.creator_id;

    // יצירת שאילתה לשמירת שורה
    let Query = "INSERT INTO employees ";
    Query += "(First Name, Last Name) ";
    Query += " VALUES ";
    Query += `('${first_name}','${last_name}') `;
    console.log("Adding task",Query);

    db_pool.query(Query, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK",lastId:rows.insertId});
        }

    });
})

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
