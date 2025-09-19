const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    const updatedListing = await Listing.findById(req.params.id).populate("reviews");
    if (updatedListing.reviews.length > 0) {
        const totalRating = updatedListing.reviews.reduce((sum, review) => sum + review.rating, 0);
        updatedListing.averageRating = totalRating / updatedListing.reviews.length; // Save as a number
    } else {
        updatedListing.averageRating = 0;
    }
    await updatedListing.save();


    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    
    const updatedListing = await Listing.findById(id).populate("reviews");
    if (updatedListing.reviews.length > 0) {
        const totalRating = updatedListing.reviews.reduce((sum, review) => sum + review.rating, 0);
        updatedListing.averageRating = totalRating / updatedListing.reviews.length; // Save as a number
    } else {
        updatedListing.averageRating = 0; 
    }
    await updatedListing.save();

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};