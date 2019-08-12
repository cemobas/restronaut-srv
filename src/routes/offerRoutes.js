import { addNewOffer } from '../controllers/offerController';

/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/venues')
        .get((req, res, next) => {
            // middleware (see README)
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, (req, res, next) =>
            res.send('GET request successful')
        )
        .post(addNewOffer);

    app.route('/venues/:venueId')
        .put((req, res) =>
            res.send('PUT request successful')
        )
        .delete((req, res) =>
            res.send('DELETE request successful')
        );
}

export default routes; // es6 syntax. no way to use it without export.