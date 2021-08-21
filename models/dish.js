const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DishSchema = new Schema(
  {
    name: {type: String, required: true},
    status: {type: String, required: true, enum: ['To try', 'Done before', 'Staple']},
    type: {type: String, required: true, enum: ['Breakfast', 'Meal/Meal Component', 'Snack', 'Dessert']},
    occasion: {type: String, required: true, enum: ['Special', 'Everyday']},
    time: {type: String, required: true, enum: ['Short', 'Medium', 'Long']},
    difficulty: {type: String, required: true, enum: ['Easy', 'Medium', 'Hard']},
    attributes: [{type: Schema.Types.ObjectId, ref: 'Dish'}],
    ingredients:[{type: Schema.Types.ObjectId, ref: 'Dish'}],
    notes:{type: String}
  }
);

module.exports = mongoose.model('Dish', DishSchema);