import { Router } from "express";

import * as funcion from "../controllers/home.controller.js"

const router = new Router();

router.get('/', funcion.showHome)

router.post('/file-content', funcion.fileContent);

router.get('/file/categories', funcion.showCategories);

router.get('/file/:category', funcion.showCategory);

router.get('/file/:category/:teamName', funcion.showResults);


export default router;