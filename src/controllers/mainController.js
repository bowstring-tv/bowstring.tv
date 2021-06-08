const controller = {
    root: (req, res) => {
        res.render('index', { title: 'Bowstring' });
    },
    about: (req, res) => {
        res.send("About");
    },
    team: (req, res) => {
        res.send("Team");
    },
    studio: (req, res) => {
        res.send("Studio");
    },
    careers: (req, res) => {
        res.send("Careers");
    },
    contact: (req, res) => {
        res.send("Contact");
    }
}

module.exports = controller;