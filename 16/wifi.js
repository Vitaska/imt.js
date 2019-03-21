var defaultSguare = 110;
var defaultRoom = 20;


function wifiSquere(amount) {
    return Math.round(amount * 1) / 1;
}

module.exports.converterToSq = function (currency) {
    return wifiSquere( defaultSguare / currency);
};
module.exports.converterToRo = function (currency) {
    return wifiSquere( defaultRoom / currency);
};