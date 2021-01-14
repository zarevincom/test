const { json } = require("express")
module.exports.getName =  function(req, res) {
    res.status(200).json({
        login: req.body,
        pass: req.body
    })
    console.log(res.body)
}
