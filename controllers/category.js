module.exports.getAll = (res, req) => {
    res.status(200).json({
        "Category": "Get All"
    })
}

module.exports.getByID = (res, req) => {
    res.status(200).json({
        "Category": "Get :id"
    })
}

module.exports.delete = (res, req) => {
    res.status(200).json({
        "Category": "Delete :id"
    })
}

module.exports.create = (res, req) => {
    res.status(200).json({
        "Category": "Post"
    })
}

module.exports.update = (res, req) => {
    res.status(200).json({
        "Category": "Patch :id"
    })
}
