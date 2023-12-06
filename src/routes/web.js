import express from "express";
import homeController from '../controller/homeController';

const router = express.Router();
/**
 * 
 * @param {*} app : express app
 */
const handleWeb = (req, res) => {
    return res.send("Helloo Thao");
}
const initWebRouter = (app) => {
    // path, handler
    router.get("/", homeController.handleWeb);
    router.get("/user", homeController.handleUser);
    return app.use("/", router);
}

export default initWebRouter; 