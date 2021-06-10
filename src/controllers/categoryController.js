const controller = {
    root: (req, res) => {
        res.send('Category');
    },
    commercials: (req, res) => {
        res.render('commercials');
    }
}

module.exports = controller;