const handleWeb = (req, res) => {
    return res.render("home.ejs");
}
const handleUser = (req, res) => {
    // model => get data from database
    return res.render("user.ejs");
}
module.exports = {
    handleWeb, handleUser
}