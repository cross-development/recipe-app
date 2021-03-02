//Core
const express = require('express');
const mongoose = require('mongoose');
//Middleware
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
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
		this.server.use(helmet());
		this.server.use(express.static('public'));
		this.server.use(fileStorage.single('avatar'));
		this.server.use(express.json());
		this.server.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
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
				useCreateIndex: true,
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true,
			});

			console.log('Database connection successful');
		} catch (error) {
			process.exit(1);
		}
	}

	startListening() {
		const port = process.env.PORT || 3001;

		this.server.listen(port, () => {
			console.log('Server started listening on port', port);
		});
	}
}

module.exports = Server;
