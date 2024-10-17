
import { Router } from "express";
import {generateNewShortURL} from '../controller/url.controller.js'

const router = Router();

router.post('/',generateNewShortURL)


export default router;