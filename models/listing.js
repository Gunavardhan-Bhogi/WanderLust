const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    country: String
});

const Listing = mongoose.model("Listing",ListingSchema);
module.exports = Listing;