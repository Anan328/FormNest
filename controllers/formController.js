const FormData = require('../models/formData');

// Fetch all data from MongoDB
exports.getAllData = (req, res) => {
  FormData.find()
    .then(data => {
      res.render('index', { formData: data});
    })
    .catch(err => {
      res.render('index', { formData: null});
      // console.error('Error fetching data:', err);
      // res.status(500).send('Error fetching data');
    });
};

// Handle form submission
exports.submitForm = (req, res) => {
  const { name, email } = req.body;
  FormData.create({ name, email })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    });
};
