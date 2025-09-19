const { ref, required } = require("joi");
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
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    category : {
        type: String,
        enum: ["Trending","Beachfront","Pools","Mountains","Castles",
      "Camping","Farms","Apartments","Villas","Hotels",
      "WellnessRetreats","Snow","Boats","Other"],
      required : true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Review'
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    averageRating : {
        type: Number,
        default:0,
    }
});

ListingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany( {_id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",ListingSchema);
module.exports = Listing;