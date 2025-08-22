const { ref } = require("joi");
const mongoose = require("mongoose");
const listingSchema = require("../schema");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/tropical-background-of-isolated-palm-tree-with-warm-sunset-behind-3d-render-fgI7wgPzQuc",
        set: (v) => v==="" ? "https://unsplash.com/photos/tropical-background-of-isolated-palm-tree-with-warm-sunset-behind-3d-render-fgI7wgPzQuc" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Review'
        }
    ]
});

ListingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany( {_id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",ListingSchema);
module.exports = Listing;