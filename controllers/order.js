module.exports.getAll = (res, req) => {
    res.status(200).json({
        "Order": "Get all"
    })
}

module.exports.create = (res, req) => {
    res.status(200).json({
        "Order": "Post order"
    })
}