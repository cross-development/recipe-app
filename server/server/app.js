//Core
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
//Middleware
const cors = require('cors');
require('dotenv').config();
//Schema
const recipeSchema = require('../api/recipes/recipe.schema');
//Router
const userRouter = require('../api/users/user.router');
//Handle logs
const accessLogStream = require('../utils/accessLogStream');

class Server {
	constructor() {
		this.server = null;
	}

	async start() {
		this.initServer();
		this.initMiddleware();
		this.initRouter();
		await this.initDatabase();
		this.initGraphQL();
		this.startListening();
	}

	initServer() {
		this.server = express();
	}

	initMiddleware() {
		this.server.use(express.json());
		this.server.use(morgan('combined', { stream: accessLogStream }));
		this.server.use(cors({ origin: '*' }));
	}

	initRouter() {
		this.server.use('/api/auth', userRouter);
		this.server.use('/api/users', userRouter);
	}

	async initDatabase() {
		try {
			await mongoose.connect(process.env.MONGODB_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			});

			console.log('Database connection successful');
		} catch (error) {
			process.exit(1);
		}
	}

	initGraphQL() {
		this.server.use(
			'/graphql',
			graphqlHTTP({
				schema: recipeSchema,
				graphiql: true,
			}),
		);
	}

	startListening() {
		this.server.listen(process.env.PORT, () => {
			console.log('Server started listening on port', process.env.PORT);
		});
	}
}

module.exports = Server;
