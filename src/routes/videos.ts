import {Schema, model} from 'mongoose'
const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true,
    //Aparently you can't set versionKey to true because mongoose thinks it's a new name for the version key which should be a string.
    versionKey: false
})

export default model('Video', videoSchema)