class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
  };

  static sanitize(string) {
    const sanitizedString = string.replace(/[^A-Za-z0-9 '-]/g, '');
    return sanitizedString;
  };

  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "of", "for", "at", "by", "from"];
    const titledString = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    const strArr = titledString.split(" ");
    const titleStrArr = strArr.map(str => {
      if (exceptions.includes(str)) {
        return str;
      } else {
        return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
      };
    });
    const titleStr = titleStrArr.join(" ")
    return titleStr;
  };

}
