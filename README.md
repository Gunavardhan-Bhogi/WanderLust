Wanderlust 🏨
Wanderlust is a full-stack web application inspired by Airbnb, built from the ground up using the MVC (Model-View-Controller) architecture. It's a complete platform where users can discover, list, and review properties around the world.

Live Project Link: https://wanderlust-495h.onrender.com

✨ Key Features
Full CRUD Functionality: Authenticated users can create, read, update, and delete their own property listings.

User Authentication & Authorization: Secure user signup, login, and logout functionality using Passport.js. Middleware ensures that only listing owners can edit or delete their properties.

Image Uploads: File upload handling with Cloudinary for storing and serving listing images in the cloud.

Interactive Maps: Geocoding with the Mapbox API to display each listing's location on an interactive map.

Reviews & Ratings: Users can post reviews with a 5-star rating for properties. The average rating is automatically calculated and saved to the database whenever a review is added or deleted.

Search & Filtering: A fully functional search bar and category filters allow users to easily find listings.

Responsive Design: A polished, mobile-first UI built with Bootstrap and custom CSS for a great experience on any device.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Frontend: EJS (Embedded JavaScript), Bootstrap

APIs / Services: Mapbox API (Geocoding), Cloudinary (Image Hosting)

Authentication: Passport.js

🚀 How to Run Locally
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js installed

MongoDB installed or a MongoDB Atlas account

Installation
1.Clone the repository:

git clone [https://github.com/Gunavardhan-Bhogi/WanderLust.git](https://github.com/Gunavardhan-Bhogi/WanderLust.git)

2.Navigate to the project directory:

cd WanderLust

3.Install NPM packages:

npm install

4.Create a .env file in the root directory and add the required environment variables (see .env.example for a template).

5.Run the application:

node app.js

The application will be available at http://localhost:8080.