exports.handler = function(event, context, callback) {
    console.log("Initial event: " + JSON.stringify(event));
    event.message = "notification generate"; 
    callback(null, event);
};
