var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET users listing. */
router.get('/', function (req, res) {
    console.log("sending GET");
    res.render('execute');
});

router.post('/run', function (req, res) {
    console.log("sending POST");
    child_process.exec(req.body.command, {}, (err, stdout, stderr) => {
        if(stderr){
            res.send("you did something wrong... See:\n" + stderr);
        }else if(err != null){
            res.send("There was an error.. See:\n" + err);
        }else{
            res.send("you ran " + req.body.command + " and got: \n" + stdout);
        }
    });
});

module.exports = router;
