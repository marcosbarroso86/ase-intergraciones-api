var request = require("request");
var assert = require("chai").assert;

var base_url = "http://localhost:8080/api/integrations"

describe("Auditoria de Terreno Server", () => {

    describe("GET /Enterprises", () => {
        
        const resource = "/enterprises";

        it("returns status code 200", () => {
            request.get( base_url + resource, (error, response, body) => {
                assert(response.statusCode).toBe(200);
            });
        });

    });

});