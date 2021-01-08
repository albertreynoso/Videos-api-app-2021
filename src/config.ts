import dotenv from 'dotenv'
dotenv.config()

export default {
    MONGO_DATABASE: process.env.DATABASE || 'mern-db',
    MONGO_USER: process.env.USER || 'admin',
    MONGO_PASSWORD: process.env.PASSWORD || 'password',
    MONGO_HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000
}