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

export const getOffers = (req, res) => {
    Offer.find({}, (err, offers) => {
        if (err) {
            res.send(err);
        }
        res.json(offers);
    });
};

export const getOfferWithId = (req, res) => {
    Offer.findById(req.params.offerId, (err, offer) => {
        if (err) {
            res.send(err);
        }
        res.json(offer);
    });
}
