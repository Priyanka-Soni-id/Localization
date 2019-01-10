pry = require("pry")
var Git = require('./git')

var git = new Git()

module.exports={
  validate: function(payload){
    var action = payload.action
    var merged = payload.pull_request.merged
    if(action == "closed" && merged == true){
       
    }
    var files =  git.getFileNames(payload.pull_request.merge_commit_sha, payload.repository.full_name)
    console.log(files)
  },
  mergeEvent: function (req, res) {
    console.log(req.body)
    // eval(pry.it)
    module.exports.validate(req.body)
    res.status(200).send({"success" : true})
  }
   
};

