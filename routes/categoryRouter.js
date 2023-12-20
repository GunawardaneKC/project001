const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(auth, authAdmin, categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(auth, authAdmin, categoryCtrl.deleteCategory)
    .put(auth, authAdmin, categoryCtrl.updateCategory)

router.put('/category/delete-subcategory/:id', auth, authAdmin, categoryCtrl.deleteSubcategory);

module.exports = router

// const router = require('express').Router();
// const categoryCtrl = require('../controllers/categoryCtrl');
// const auth = require('../middleware/auth');
// const authAdmin = require('../middleware/authAdmin');

// router.route('/category')
//   .get(categoryCtrl.getCategories)
//   .post(auth, authAdmin, categoryCtrl.createCategory);

// router.route('/category/:id')
//   .delete(auth, authAdmin, categoryCtrl.deleteCategory)
//   .put(auth, authAdmin, categoryCtrl.updateCategory);

// // Subcategory routes
// router.route('/category/:id/subcategory')
//     .post(auth, authAdmin, categoryCtrl.createSubCategory);

// router.route('/category/:id/subcategory/:subCatId')
//     .delete(auth, authAdmin, categoryCtrl.deleteSubCategory);

// module.exports = router;
