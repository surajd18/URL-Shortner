import shortid from "shortid";
import {URL} from "../models/url.model.js"


 async function generateNewShortURL(req,res){

    const body =req.body;

    if(!body.url) return res.status(400).json({error:'url required!'})

    const shortID= shortid();
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[]
    })

    return res.status(201).json({id:shortID})
 }

export {generateNewShortURL}