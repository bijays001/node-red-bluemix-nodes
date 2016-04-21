module.exports = function(RED) {
    function base64tofile(config) {
        RED.nodes.createNode(this,config);
        var fs   = require("fs");
        var node = this;
        this.on('input', function(msg) {
         var bitmap = new Buffer( msg.payload, 'base64');
         fs.writeFileSync("out.png", bitmap);
         msg.payload = fs.createReadStream("out.png");

         
            node.send(msg);
        });
    }
    RED.nodes.registerType("base64tofile",base64tofile);
}