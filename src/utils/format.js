const Format = {
  toFixedFloat(num, decimalPlaces) {
    var multiplier = (decimalPlaces - 1) * 100;

    return parseFloat(Math.round(num * multiplier) / multiplier).toFixed(decimalPlaces);
  },

  stripLeadingZero(num) {
    num = num.toString().replace(/^0+/, '');

    return num;
  }
}

export default Format;
