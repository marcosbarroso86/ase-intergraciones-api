import EnterpriseController from "../controller/EnterpriseController";

export class Router {

    private routes: any;
    private enterpriseController: EnterpriseController;

    constructor(){
        this.enterpriseController = new EnterpriseController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/integrations/enterprises')
        .get(this.enterpriseController.getEnterprises);
    }

    public getRoutes(){
        return this.routes;
    }

}

