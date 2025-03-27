import { model, Schema } from "mongoose";

const VerificationTokenSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    expires: {
        type: Date,
        default: Date.now(),
        expires: 60 * 60 * 24
    }
})
const VerificationTokenModel = model(
    'VerificationTokenModel',
    VerificationTokenSchema
);

export default VerificationTokenModel

