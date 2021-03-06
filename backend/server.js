import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyParser from "body-parser"

dotenv.config();

// const mongodbUrl = config.MONGODB_URL;
// mongoose.connect('mongodb://localhost:27017/AMAZONA', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true

//     }).then(() => {
//         console.log('start')
//     })
//     .catch(error => console.log(error.reason, 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'));





const app = express();
app.use(bodyParser.json())

app.use("/api/users", userRoute)
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;

    const product = data.products.find(x => x._id === productId)

    if (product)
        res.send(product)
    else
        res.status(404).send({ msg: "Product Not Found" })
});
app.get("/api/products", (req, res) => {
    res.send(data.products)
});


app.listen(5000, () => { console.log(`server started at http://localhost:5000`) })
const mongodbUrl = config.MONGODB_URL;
console.log(mongodbUrl)
mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,

        useUnifiedTopology: true,


    })
    .then(() => {
        console.log('start')
    })
    .catch(error => console.log(error.message, 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'));