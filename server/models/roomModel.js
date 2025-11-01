const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true,
  },
  roomType: {
    type: String,
    required: true,
    enum: ["Single", "Double", "King", "Suite"], 
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  roomStayedDays:{
    type: Number,
    default: 0,
},
  isAvailable: {
    type: Boolean,
    default: true, 
  },
  status: {
    type: String,
    enum: ["Available", "Occupied", "Cleaning", "Maintenance"],
    default: "Available",
  },
  description: {
    type: String,
  },
  amenities: [
    {
      type: String, 
      enum :[
        "WiFi",
        "TV",
        "Air Conditioning", 
        
      ]
    },
  ],


});

module.exports = mongoose.model("Room", roomSchema);

