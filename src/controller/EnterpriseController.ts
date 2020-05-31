import EnterpriseService from "../service/EnterpriseService";
import { Request, Response } from "express";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";
import HttpRequestError from "../errors/HttpRequestError";

export default class EnterpriseController {

    private enterpriseService: EnterpriseService

    constructor(){
        this.enterpriseService = new EnterpriseService();
    }

    public getEnterprises = (req: Request , res: Response) => {
        const filters = req.query;
        this.enterpriseService.getEnterprises(filters)
        .then( response => {
            HTTPResponseHandler.sendSuccess(res , response);})
        .catch(error => {
            HTTPResponseHandler.sendInternalError(res , HttpRequestError.ERROR_TYPE , null)
        })

    }
}