//Core
const express = require('express');
const mongoose = require('mongoose');
//Middleware
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const fileStorage = require('../middleware/fileStorage');
//Router
const authRouter = require('../api/auth/auth.router');
const userRouter = require('../api/users/user.router');
const recipeRouter = require('../api/recipes/recipe.router');
const favoriteRouter = require('../api/favorites/favorite.router');
const ingredientRouter = require('../api/ingredients/ingredient.router');
const recipeCuisineRouter = require('../api/recipeCuisines/recipeCuisine.router');
const recipeCategoryRouter = require('../api/recipeCategories/recipeCategory.router');
const ingredientCategoryRouter = require('../api/ingredientCategories/ingredientCategories.router');
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
		this.startListening();
	}

	initServer() {
		this.server = express();
	}

	initMiddleware() {
		this.server.use(express.static('public'));
		this.server.use(fileStorage.single('avatar'));
		this.server.use(express.json());
		this.server.use(morgan('combined', { stream: accessLogStream }));
		this.server.use(cors({ origin: '*' }));
	}

	initRouter() {
		this.server.use('/api/auth', authRouter);
		this.server.use('/api/users', userRouter);
		this.server.use('/api/recipes', recipeRouter);
		this.server.use('/api/favorites', favoriteRouter);
		this.server.use('/api/ingredients', ingredientRouter);
		this.server.use('/api/recipe-cuisines', recipeCuisineRouter);
		this.server.use('/api/recipe-categories', recipeCategoryRouter);
		this.server.use('/api/ingredient-categories', ingredientCategoryRouter);
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
