module.exports = {
    post: (req, res) => {
        const result = req.body;
        console.log(result);
        res.status(200).json({message: "ok!"});
    },

}