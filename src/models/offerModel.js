import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OfferSchema = new Schema({
    title: {
        type: String,
        required: 'Enter an offer title'
    },
    desc: {
        type: String,
    },
    tags: {
        type: Array
    },
    item: {
        type: String
    },
    venueId: {
        type: String
    }
});
