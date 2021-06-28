module.exports = (app) => {
    app.use('/upload', require('./routes/upload'));
    app.use('/auth', require('./routes/auth'));
    app.use('/', require('./routes/index'));
};
