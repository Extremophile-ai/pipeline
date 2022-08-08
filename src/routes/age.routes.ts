import { Router } from "express"
import ageController from "../controller/age.controller";

const router: Router = Router()
const {getAgeFromDob} = ageController

router.get("/howold", getAgeFromDob);
export default router
