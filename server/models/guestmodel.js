const mongoose =require ('mongoose');
const guestModelSchema = new mongoose.Schema({
 fullName: {
     type: String,
      required: true 
    },
  email: {
     type: String,
     required: true
    },
  phone: {
     type: String,
      required: true
     },
  address: { 
    type: String,
    required: true

},
 
  preferences: {
    bedType: {
         type: String,
         required: true,
            enum: ['Single', 'Double', 'Queen', 'King'],

         }, 

    roomView: {
         type: String,
            enum: ['Sea View', 'Garden View'], 
        }, 
    foodPreferences: { 
        type: String,
        required: true,
        enum: ['Vegetarian', 'Non-Vegetarian'],
        default:'all'
     },
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User" },
  })
module.exports =mongoose.model('Guest',guestModelSchema);