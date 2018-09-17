'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listings = require('./listings.json'),
    config = require('./config');

/* Connect to your database */

const mongoURL = 'mongodb://<testUser>:<testUser1>@ds253871.mlab.com:53871/mydatabse';
mongoose.connect(mongoURL, function(err){
  if(err) throw err;
});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


var listingO = mongoose.model("listingO", ListingSchema)
for(var i=0; i<listings.length; i++){
  var item=listings[i];
  temp=new listingO({
    code: item.code,
    name: item.name,
    longitude: item.coordinates.longitude,
    latitude: item.coordinates.latitude,
    address: item.address
  });
  temp.save(function(err){
    if(err) throw err;
  });
};

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */