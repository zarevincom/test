module.exports.overview = (res, req) => {
    res.status(200).json({
        "Analytics": "Get Overview"
    })
}

module.exports.analytics = (res, req) => {
    res.status(200).json({
        "Analytics": "Get Analytics"
    })
}
