module.exports.getByID = (res, req) => {
    res.status(200).json({
        "Position": "Get :id"
    })
}

module.exports.create = (res, req) => {
    res.status(200).json({
        "Position": "Post position"
    })
}

module.exports.delete = (res, req) => {
    res.status(200).json({
        "Position": "Delete :id"
    })
}

module.exports.update = (res, req) => {
    res.status(200).json({
        "Position": "Patch :id"
    })
}