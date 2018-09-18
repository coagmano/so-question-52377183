import { Meteor } from 'meteor/meteor';
import multer from 'multer';
import express from 'express';
const app = express();
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
});

WebApp.connectHandlers.use(app);
