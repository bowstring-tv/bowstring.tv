const controller = {
    root: (req, res) => {
        res.render('index', { title: 'Bowstring', layout: 'layout-no-nav' });
    },
    about: (req, res) => {
        res.render('about');
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