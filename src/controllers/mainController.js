const controller = {
    root: (req, res) => {
        res.render('index', { title: 'Bowstring', layout: 'layout-no-nav' });
    },
    about: (req, res) => {
        res.render('about');
    },
    team: (req, res) => {
        res.render('team');
    },
    studio: (req, res) => {
        res.render('studio');
    },
    careers: (req, res) => {
        res.send("Careers");
    },
    contact: (req, res) => {
        res.render("contact");
    },
    agency: (req, res) => {
        res.render('home-agency');
    }
}

module.exports = controller;