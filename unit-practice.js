const functions = {
  strLength: (str) => {
    str = str.length;
    if (str <= 10 || str == 1) {
      return str;
    } else {
      console.error("your characters are greater than 10 or less than 1");
    }
  },
  strReverse: (str) => {
    str = str.split("").reverse().join("");
    return str;
  },
};

module.exports = functions;
