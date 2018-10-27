const usersController = {
    index: (req, res) => {
        res.send('Hey USER!!!!!!!')
    },
    new: (req, res) => {
        res.send("Hey this is new route on stores")
    }
    
}
module.exports = usersController


