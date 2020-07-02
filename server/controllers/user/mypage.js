module.exports = {
    info: {
        get: (req, res) => {
            console.log("check");
            res.status(200).send(req.params.userId);
    }},
    diary:{
        get: (req, res) => {
            console.log("check");
            res.status(200).send(req.params.userId);
    }}
}