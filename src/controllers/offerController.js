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

export const updateOffer = (req, res) => {
    /** "new: true" means you want the new (updated) data in the response (not the old data) */
    Offer.findOneAndUpdate({ _id: req.params.offerId}, req.body, { new: true }, (err, offer) => {
        if (err) {
            res.send(err);
        }
        res.json(offer);
    })
}
