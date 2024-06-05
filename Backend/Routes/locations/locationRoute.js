import express from 'express';
import Location from '../../models/locationModel/locationModel.js';
import  locations from '../../data/location.js';
import asyncHandler from "../../middleware/asyncHandler.js";

const locationRouter= express.Router();


locationRouter.get('/', asyncHandler(async (req, res) => {
    const getLocation = await Location?.find({});
    res.status(200).json({ locations: getLocation.length ? getLocation[0].locations: [] });
}));

export default locationRouter;