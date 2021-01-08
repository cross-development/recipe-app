function prettyResponse(results) {
	if (results.docs.length < 1) {
		return null;
	}

	return {
		results: results.docs,
		limitResults: results.limit,
		totalResults: results.totalDocs,
		page: results.page,
		totalPages: results.totalPages,
	};
}

module.exports = prettyResponse;
