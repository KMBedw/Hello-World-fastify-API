// Controller
const {welcomeHomeController, sayHelloToSomeoneHomeController} = require('../controllers/HomeControllers');


// Schemas
const {sayHelloToSomeoneHomeSchema} = require('../schemas/HomeSchemas');


// Routes
module.exports = function HomeRoutes(app, options, done){
	app.get('/', {handler: welcomeHomeController});
	app.post('/hello', {schema: sayHelloToSomeoneHomeSchema, handler: sayHelloToSomeoneHomeController});

	done();
}