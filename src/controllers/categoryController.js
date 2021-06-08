const controller = {
    root: (req, res) => {
        res.send('Category');
    },
    commercials: (req, res) => {
        res.send('Category/Commercials');
    }
}

module.exports = controller;