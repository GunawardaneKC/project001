const { default: _default } = require('concurrently')
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    subcategory: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema)

// const mongoose = require('mongoose');

// const subcategorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true
//     }
// }, { timestamps: true });

// const categorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true
//     },
//     subcategories: [subcategorySchema]
// }, { timestamps: true });

// module.exports = mongoose.model("Category", categorySchema);

