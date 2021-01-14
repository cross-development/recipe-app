//Core
const express = require('express');
const mongoose = require('mongoose');
//Middleware
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
//Router
const userRouter = require('@api/users/user.router');
const recipeRouter = require('@api/recipes/recipe.router');
const ingredientRouter = require('@api/ingredients/ingredient.router');
//Handle logs
const accessLogStream = require('@utils/accessLogStream');

class Server {
	constructor() {
		this.server = null;
	}

	async start() {
		this.initServer();
		this.initMiddleware();
		this.initRouter();
		await this.initDatabase();
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
		this.server.use('/api/recipes', recipeRouter);
		this.server.use('/api/ingredients', ingredientRouter);
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

	startListening() {
		this.server.listen(process.env.PORT, () => {
			console.log('Server started listening on port', process.env.PORT);
		});
	}
}

module.exports = Server;
