// Utils
const errorHandler = require('../utils/errorHandler');


// Controllers
async function welcomeHomeController(request, reply){
	try{
		return reply
			.code(200)
			.send({
				status: 200,
				message: 'Hello World from API !'
			});
	} catch (error){
		errorHandler(reply, 500, error);
	}
}

async function sayHelloToSomeoneHomeController(request, reply){
	try{
		const {name} = request.body;

		return reply
			.code(200)
			.send({
				status: 200,
				message: `Hello ${name} !`
			});
	} catch (error){
		errorHandler(reply, 500, error);
	}
}

module.exports = {
	welcomeHomeController,
	sayHelloToSomeoneHomeController
}