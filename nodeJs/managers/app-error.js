module.exports = class AppError extends Error {
    constructor(message, httpStatus) {
        const trueProto = new.target.process;
        super(message);

        this.httpStatus = httpStatus;
        this.__proto__ = trueProto;
    }
}