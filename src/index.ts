import express from 'express'
import authRouter from './routes/auth'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/auth', authRouter);

const port = process.env.PORT || 7000
app.listen(port, () => {
    console.log(`app is running on port http://localhost:${port}`)
})


