/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Listing = require('./ListingSchema.js'); 
var config = require('./config');

const mongoURL = 'mongodb://CEN3031:CEN3031TA@ds159772.mlab.com:59772/jessiedb';
mongoose.connect(mongoURL, function(err){
  if(err) throw err;
});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({"name": 'Library West'}, function(err, listing){
    if(err) throw err;
    console.log(listing + "\n");
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({"code": "CABL"}, function(err, listing){
    if(err) throw err;
    console.log(listing);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

  Listing.findOneAndUpdate({"name": "Phelps Laboratory"},
  {"address" : "Phelps Lab, Gainesville, FL, 32611, United States"},
  {new: true}, function(err, listing){
    if(err) throw err;
    console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listing){
    if(err) throw err;
    console.log(listing);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
