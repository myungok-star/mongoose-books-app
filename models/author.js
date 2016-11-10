var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating a schema for authors
var AuthorSchema = new Schema({
    name: String,
    alive: Boolean,
    image: String
});
//creating an Author model from the Schema
var Author = mongoose.model('Author', AuthorSchema);
//exporting my Author model
module.exports = Author;
