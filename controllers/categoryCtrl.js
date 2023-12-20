// const Category = require('../models/categoryModel')
// const Products = require('../models/productModel')

// const categoryCtrl = {
//     getCategories: async(req, res) =>{
//         try {
//             const categories = await Category.find()
//             res.json(categories)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     createCategory: async (req, res) =>{
//         try {
//             // if user have role = 1 ---> admin
//             // only admin can create , delete and update category
//             const {name} = req.body;
//             const category = await Category.findOne({name})
//             if(category) return res.status(400).json({msg: "This category already exists."})

//             const newCategory = new Category({name})

//             await newCategory.save()
//             res.json({msg: "Created a category"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     deleteCategory: async(req, res) =>{
//         try {
//             const products = await Products.findOne({category: req.params.id})
//             if(products) return res.status(400).json({
//                 msg: "Please delete all products with a relationship."
//             })

//             await Category.findByIdAndDelete(req.params.id)
//             res.json({msg: "Deleted a Category"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     updateCategory: async(req, res) =>{
//         try {
//             const {name} = req.body;
//             await Category.findOneAndUpdate({_id: req.params.id}, {name})

//             res.json({msg: "Updated a category"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
// }


// module.exports = categoryCtrl

const Category = require('../models/categoryModel');
const Products = require('../models/productModel');

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name, subcategory } = req.body;
      const category = await Category.findOne({ name });

      if (category) return res.status(400).json({ msg: "This category already exists." });

      const newCategory = new Category({ name, subcategory });

      await newCategory.save();
      res.json({ msg: "Created a category" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const products = await Products.findOne({ category: req.params.id });
      if (products)
        return res.status(400).json({
          msg: "Please delete all products with a relationship.",
        });

      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Category" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { name, subcategory } = req.body;

      const updatedCategory = await Category.findOneAndUpdate(
        { _id: req.params.id },
        { name, subcategory },
        { new: true }
      );

      res.json({ msg: "Updated a category", updatedCategory });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteSubcategory: async (req, res) => {
    try {
      const { subcategory } = req.body;
  
      const updatedCategory = await Category.findOneAndUpdate(
        { _id: req.params.id, 'subcategory.name': subcategory },
        { $pull: { subcategory: { name: subcategory } } },
        { new: true }
      );
  
      res.json({ msg: "Deleted a subcategory", updatedCategory });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

//   createSubCategory: async (req, res) => {
//     try {
//         const { subcategory } = req.body;
//         const category = await Category.findById(req.params.id);

//         if (!category) return res.status(400).json({ msg: "Category not found." });

//         category.subcategories.push({ name: subcategory });
//         await category.save();

//         res.json({ msg: "Subcategory added successfully", category });
//     } catch (err) {
//         return res.status(500).json({ msg: err.message });
//     }
// },

// deleteSubCategory: async (req, res) => {
//   try {
//       const category = await Category.findById(req.params.id);

//       if (!category) return res.status(400).json({ msg: "Category not found." });

//       category.subcategories = category.subcategories.filter(subCat => subCat._id.toString() !== req.params.subCatId);

//       await category.save();

//       res.json({ msg: "Subcategory deleted successfully", category });
//   } catch (err) {
//       return res.status(500).json({ msg: err.message });
//   }
// }

};

module.exports = categoryCtrl;


// const Category = require('../models/categoryModel');
// const Products = require('../models/productModel');

// const categoryCtrl = {
//   getCategories: async (req, res) => {
//     try {
//       const categories = await Category.find();
//       res.json(categories);
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

//   createCategory: async (req, res) => {
//     try {
//       const { name } = req.body;
//       const category = await Category.findOne({ name });

//       if (category) return res.status(400).json({ msg: "This category already exists." });

//       const newCategory = new Category({ name });

//       await newCategory.save();
//       res.json({ msg: "Created a category" });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

//   deleteCategory: async (req, res) => {
//     try {
//       const products = await Products.findOne({ category: req.params.id });
//       if (products)
//         return res.status(400).json({
//           msg: "Please delete all products with a relationship.",
//         });

//       await Category.findByIdAndDelete(req.params.id);
//       res.json({ msg: "Deleted a Category" });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

//   updateCategory: async (req, res) => {
//     try {
//       const { name } = req.body;

//       const updatedCategory = await Category.findOneAndUpdate(
//         { _id: req.params.id },
//         { name },
//         { new: true }
//       );

//       res.json({ msg: "Updated a category", updatedCategory });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

//   createSubCategory: async (req, res) => {
//     try {
//       const { subcategory } = req.body;

//       const updatedCategory = await Category.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { subcategory } },
//         { new: true }
//       );

//       res.json({ msg: "Subcategory added", updatedCategory });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

//   updateSubCategory: async (req, res) => {
//     try {
//       const { subcategory } = req.body;

//       const updatedCategory = await Category.findOneAndUpdate(
//         { _id: req.params.id, 'subcategory._id': req.params.subId },
//         { $set: { 'subcategory.$.name': subcategory } },
//         { new: true }
//       );

//       res.json({ msg: "Subcategory updated", updatedCategory });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

//   deleteSubCategory: async (req, res) => {
//     try {
//       const updatedCategory = await Category.findOneAndUpdate(
//         { _id: req.params.id },
//         { $pull: { subcategory: { _id: req.params.subId } } },
//         { new: true }
//       );

//       res.json({ msg: "Subcategory deleted", updatedCategory });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
// };

// module.exports = categoryCtrl;