const CategoryModel = require('../../DB/model/category')
const { verifyadmin } = require('../../middleware/auth')
const { addcategory, getcategory, deletecategory, updatecategory } = require('./controller/category')

const categoryRouter = require('express').Router()

categoryRouter.post('/addCategory', verifyadmin, addcategory)
categoryRouter.post('/deleteCategory', verifyadmin, deletecategory)
categoryRouter.post('/updateCategory', verifyadmin, updatecategory)
categoryRouter.get('/Categories', getcategory)


module.exports = categoryRouter
