const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    filterType : {
       type : Object,
       required : true
    }
})

module.exports = mongoose.model('Category', categorySchema);