import { QueryBuilder, SelectQueryBuilder } from "typeorm";
import Enterprise from "../model/Enterprise";
import Constants from "../constants/Constants";

export default class QueryUtils {

    public static buildConditions = (filters: any , query:SelectQueryBuilder<Enterprise>) => {
        if ("cuit" in filters) {
            query = query
            .andWhere(`${Constants.CONDITION_LIKE_CUIT}:cuit` , 
            {cuit: '%' + filters.cuit + '%' })
        }
        if ("businessName" in filters) {
            query = query
            .andWhere(`${Constants.CONDITION_LIKE_BUSINESS}:business` , 
            {businessName: '%' + filters.businessName + '%' })
        }
        if ("businessCuit" in filters) {
            query = query
            .andWhere(`${Constants.CONDITION_LIKE_CUIT}:businessCuit`, 
            {cuit: '%' + filters.businessCuit + '%' })

            .orWhere(`${Constants.CONDITION_LIKE_BUSINESS}:businessCuit`, 
            {businessName: '%' + filters.businessCuit + '%' })
        }   
        
        return query;
    }   



}