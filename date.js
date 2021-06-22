//jshint esversion:6
//exports. is short for module.exports.

exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-IN", options);
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-IN", options);
}
// console.log(module.exports);