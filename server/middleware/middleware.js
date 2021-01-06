//Mongoose validation ObjID
const {
	Types: { ObjectId },
} = require('mongoose');

function validateQuery(req, res, next) {
	const { query } = req.query;

	if (!query || query.length < 2) {
		return res.status(400).send({ message: 'invalid query' });
	}

	next();
}

function validatePage(req, res, next) {
	const { page } = req.query;

	if (!page && page !== '') {
		return next();
	}

	const defaultPage = 1;
	const isPageValid = Number(page) && Number(page) >= defaultPage;

	if (!isPageValid) {
		return res.status(400).send({ message: 'invalid page' });
	}

	next();
}

function validateId(req, res, next) {
	const { id } = req.params;

	if (!ObjectId.isValid(id)) {
		return res.status(400).send({ message: 'invalid id' });
	}

	next();
}

module.exports = {
	validateQuery,
	validatePage,
	validateId,
};
