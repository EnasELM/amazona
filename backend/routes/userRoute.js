import express from "express";
import User from '../models/userModel'
import { getToken } from "../util";

const router = express.Router();

router.post('/signin', async(req, res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    }).then((user) => { /* Your logic here */ })
    console.log(signinUser, 'email, password')

    if (signinUser) {

        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)

        })

    } else {
        res.status(401).send({ msg: 'Invalid Email or Password.' })

    }
})

router.get("/createadmin", async(req, res) => {

    try {

        const user = new User({
            name: 'Enas',
            email: 'enaselmahdwi@gmail.com',
            password: '1234',
            isAdmin: true,
        });
        console.log(user, 'newUser')
        const newUser = await user;
        console.log(newUser, 'newUser')
        res.send(newUser);
        console.log('bbb')

    } catch (error) {
        console.log(error.message)
        res.send({ msg: error.message })
    }

})

export default router;