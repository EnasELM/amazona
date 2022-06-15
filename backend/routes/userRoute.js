import express from "express";
import User from "../models/userModel";
import { getToken } from "../util";

const router = express.Router();

router.post('/signin', async(req, res) => {
    console.log(User, 'User')
    const signinUser = await User.find({
        email: req.body.email,
        password: req.body.password
    })



    if (signinUser) {
        console.log(signinUser[0].email, 'name')
        res.send({
            _id: signinUser[0]._id,
            name: signinUser[0].name,
            email: signinUser[0].email,
            isAdmin: signinUser[0].isAdmin,
            signinUser,
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
        })
        console.log(user, 'newUser')
        const newUser = await user.save();
        console.log(newUser, 'newUser')
        res.send(newUser);
        console.log('bbb')

    } catch (error) {
        console.log(error.message)
        console.error(error.message, 'error')
        res.send({ msg: error.message })
    }

})

export default router;