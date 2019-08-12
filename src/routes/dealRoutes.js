/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/venue')
        .get((req, res) =>
            res.send('GET request successful')
        )
        .post((req, res) =>
            res.send('POST request successful')
        );

    app.route('/venue/:venueId')
        .put((req, res) =>
            res.send('PUT request successful')
        )
        .delete((req, res) =>
            res.send('DELETE request successful')
        );
}

export default routes; // es6 syntax. no way to use it without export.