import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    upvotes: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentType: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "available",
    },

}, {
    timestamps: true
}, {
    collection: 'donations',
})

export const DonationModel = mongoose.model('donation', schema);