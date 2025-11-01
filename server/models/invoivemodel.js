const mongoose =require ('mongoose');
const invoiceModelSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest"

    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"

    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    noOfDaysStayed: {
        type: Number,
        required: true
        
    },
    totalAmount: {
        type: Number,
        required: true  

    },
    paymentStatus: {
        type: String,
        enum: ["Paid", "Unpaid", "Pending"],
        default: "Unpaid"

    },

});
module.exports =mongoose.model('Invoice',invoiceModelSchema);