module.exports={
  mergeEvent: function (req, res) {
    console.log(req.body)
    res.status(200).send({"success" : true})
  } 
}; 