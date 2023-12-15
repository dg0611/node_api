import express from "express";

let router = express.Router();

import userController from "./UserController.js";
import curseController from "./CourseController.js";
import evaluetionController from "./EvaluationController.js";
import teacherController from "./TeacherController.js";

router.get("/", function(req,res){
    console.log("ok")
    res.status(200).json({message:"Sucesso"});
});

router.use("/", userController);
router.use("/", curseController);
router.use("/", evaluetionController);
router.use("/", teacherController);

export default router;