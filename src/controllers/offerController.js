import mongoose from 'mongoose';
import { OfferSchema } from '../models/offerModel';

const Offer = mongoose.model('Offer', OfferSchema);

export const addNewOffer = (req, res) => {
    let newOffer = new Offer(req.body);

    newOffer.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
