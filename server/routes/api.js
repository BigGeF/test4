const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Event = require('../models/event')
const mongoose = require('mongoose')
const db = 'mongodb://localhost/newPPP'
const jwt = require("jsonwebtoken")

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, err => {
    if (err) {
        console.error('Error', err)
    } else {
        console.log("Connected to MongoDb");
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorziation) {
        return res.status(401).send('headers,Unauthorized request');
    }
    let token = req.headers.authorziation.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('token Unauthorized request')
    };
    try {
        let payload = jwt.verify(token, 'password')
        req.body = payload.subject
            // console.log(req.body);
        next()

    } catch (err) {
        console.log(err);
        return res.status(401).send('catch Unauthorized request')

    }
}

// get all events
router.get('/events', verifyToken, (_, res) => {
    // let events = new Event()
    Event.find({}, (err, events) => {
        if (err) {
            return res.json(err)
        }
        res.json(events)
    })
})

router.get('/eventsForIndex', (_, res) => {
    // let events = new Event()
    Event.find({}, (err, events) => {
        if (err) {
            return res.json(err)
        }
        res.json(events)
    })
})
router.get('/allUsers', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.json(err)
        }
        res.json({
            result: 'success',
            users
        })
    })
})

router.post('/register', (req, res) => {
        let userData = req.body
        if (req.body.adminCode === 'wa98030') {
            userData.isAdmin = true;
        }

        let user = new User(userData)
        user.save((error, registeredUser) => {
            if (error) {
                console.log(error);
                res.status(401).send({ error: error.errors })
            }
            if (registeredUser.isAdmin !== true) {
                res.status(401).send("You are not admin")
            } else {
                let payload = { subject: registeredUser }
                let token = jwt.sign(payload, 'password')
                res.status(200).send({ token })
            }
        })
    })
    //adminlogin,需要做一个普通用户login
router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
            res.status(401).send({ error: error.errors })
        } else {
            if (!user) {
                res.status(401).send("Invaild email")
            } else
            if (user.password !== userData.password) {
                res.status(401).send('invaild password')
            } else
            if (user.isAdmin !== true) {
                res.status(401).send('You are not admin')
            } else {
                // console.log(user.isAdmin);
                let payload = { subject: userData }
                let token = jwt.sign(payload, 'password')
                    // localStorage.getItem({ user })
                    // res.json({ user })
                res.status(200).send({ token, user })

                // res.json({ result: 'success' })
            }
        }
    })
})

// router.get('/currentUser', (req, res) => {
// const userEmail = req.body.email;
// if (!userEmail) {
//     return res.json({ user: null })
// }

//     User.findById(req.params.id, (err, user) => {
//         if (err) {
//             return res.json({ errors: err.errors });
//         }
//         res.json({ user })
//     })
// })

// create a event
router.post('/events', (req, res) => {
    let eventData = req.body
    let event = new Event(eventData)
    event.save((error, savedEvent) => {
        if (error) {
            res.status(401).send({ error: error.errors })
        } else {
            res.status(200).send(savedEvent)
        }
    })
})

// get event By Id
router.get('/events/:id', (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            return res.json(err);
        }
        res.json({ event })
    })
})

// udpate an event
router.put('/events/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, (err, event) => {
        if (err) {
            return res.json({ errors: err.errors })
        }
        res.json({ event })
    })
})

// delete an event
router.delete('/delete/:id', (req, res) => {
    Event.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            return res.json({ errors: err.errors });
        }
        res.json({ result: "success" })
    })
})
module.exports = router