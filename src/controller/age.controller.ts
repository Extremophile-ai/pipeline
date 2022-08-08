import { Response } from "express";
import utilServices from "../services/util.services";
import ageServices from "../services/age.services";
import { IRequest } from "../interface/IRequest.interface";


export default {
  async getAgeFromDob(req: IRequest, res: Response) {
    try {
      const dob = req.query.dob as string
      if(!dob){
        throw new Error("please enter a valid date of birth")
      }

      const validateDob = utilServices.validateDob(dob)
      if(validateDob) {
        const age = await ageServices.getPersonAge(dob)
        return res.status(200).json({
          message: `your current age is ${age}`
        })
      }
     
    } catch (error: any) {
      return res.status(400).json({
        errorMessage: error.message
      })
    }
  }
}