var stealTools = require('steal-tools');

var system = {
	config: __dirname + "/package.json!npm"
}

stealTools.build(system);
