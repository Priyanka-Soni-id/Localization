pry = require("pry")
module.exports={
  validate: function(payload){
    var action = payload.action
    var merged = payload.pull_request.merged
    if(action == "closed" && merged == true){
       
    }
    var files =  payload.pull_request
  },
  mergeEvent: function (req, res) {
    console.log(req.body)
    // eval(pry.it)
    module.exports.validate(req.body)
    res.status(200).send({"success" : true})
  }
   
};

