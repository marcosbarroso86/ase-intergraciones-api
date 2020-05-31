import Enterprise from "../model/Enterprise";
import {Repository} from "../connection/Connection";
import QueryUtils from "../utils/QueryUtils";

export default class EnterpriseService {
    constructor(){}

    public getEnterprises = async (filters:any) => {
        const enterpriseRepository = await this.getRepository();
        let query = enterpriseRepository.createQueryBuilder('enterprise')
        query = QueryUtils.buildConditions(filters , query);
        return query.getMany();
    }

    private getRepository = async () => {
        const repository = await Repository.getConnection();
        return repository.getRepository(Enterprise);
    }
}