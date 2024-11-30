// Assuming you have a function named parseLiteral and interpolate.gamma is a valid argument
function parseLiteral(value) {
    // Logic to parse the literal value
    // Replace this with your actual implementation
    return value;
}

// Declare the params object
var params = {};

// Assign the result of calling parseLiteral with interpolate.gamma to the interpolateGamma property of params
params.interpolateGamma = parseLiteral(interpolate.gamma);

console.log(params.interpolateGamma);
