const sayHelloToSomeoneHomeSchema = {
	body: {
		type: 'object',
		properties: {
			name: {
				type: 'string',
				maxLength: 50
			},
		},
		required: [
			'name'
		]
	},
	response: {
		200: {
			type: 'object',
			properties: {
				status: {
					type: 'number'
				},
				message: {
					type: 'string',
				}
			}
		},
		500: {
			type: 'object',
			properties: {
				status: {
					type: 'number',
				},
				message: {
					type: 'string',
				}
			}
		},
	}
}

module.exports = {
	sayHelloToSomeoneHomeSchema
}