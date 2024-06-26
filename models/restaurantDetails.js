const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantDetails = new Schema({
    name: {
        type: String,
        required: true,
    },
    image : {
        type:String,
    },
    contact: {
        type: String,
        required: true,
    },
    cuisineServed: {
        type: String,
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
        },
    ],
    menu : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "menuItem",
        },
    ],
    recommendedBy : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile",
        }
    ],
    recommendationCount : {
        type: Number,
        default : 0
    }
});

const RestaurantDetails = mongoose.model(
    "restaurantDetails",
    restaurantDetails
);

module.exports = RestaurantDetails;