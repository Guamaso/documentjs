
module.exports = {
	
	generate: require("./lib/generate/generate"),
	find: require("./lib/find/find"),
	generate: require("./lib/generate/generate"),
	generators: {
		html : require("./lib/generators/html/html")
	},
	process: require("./lib/process/process"),
	tag: require("./libs/tags/tags")
};