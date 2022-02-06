var chai = require('chai');
var sinon = require('sinon');
const {expect} = require('chai');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);
const registerController = require('../controllers/registerController');
const registerService = require('../services/registerservice');
const registerValidation = require('../validation/registervalidation')
describe("Testing Return device Controller ->#", ()=>{
    let req,res;
    beforeEach(()=>{
        req={
            body:{
                name:"name"
            }
        };
        res = {
            send: function(){},
            json: function(d){return d},
            status: function(s){this.statusCode=s;return this}
        }
    })
    it('happy path to save data', async ()=>{
        let responseData={
            test:"test"
        }
        
        let validationStub = sinon.stub(registerValidation, 'createValidation').resolves(responseData);
        /**
         * If we want to throw error we can use throws method
         * sinon.stub(registerValidation, 'createValidation').throws({error:"error"});
         * 
         */
        let serviceStub = sinon.stub(registerService, 'registerDetails').resolves(responseData);
        let result = await registerController.registerDetails(req, res);
         expect(result.status).to.be.eql(true);
    })
})