import { model, Schema } from "mongoose";
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'author'],
        default: 'user'
    },
})
const UserModel = model(
    'User',
    UserSchema
);

export default UserModel

