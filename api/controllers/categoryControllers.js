const mongoose = require('mongoose');

const Category = require('../models/category');

const categoryCreate = (req, res) => {
    const {title} = req.body;
    const newCategory = new Category({title});
    newCategory.save(newCategory, (err, newCategory) =>{
        if (err) {
            res.status(500)
            res.json({errorMessage: err.message});
            return;
            }
            res.json(newCategory);
    });
};

const categoriesGetAll = (req, res) => {
    Category.find({})
     .then(categories => {
       if (categories.length === 0) {
         throw new Error();
       }
       res.json(categories);
     })
     .catch(err => res.status(422).json(err));
   };

   module.exports = {
        categoryCreate,
        categoriesGetAll
   }