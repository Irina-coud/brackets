
module.exports = function check(str, bracketsConfig) {
  let result = true;
  let consequens = str;

  while (consequens.length > 0 && result === true) {

    let notMatchCount = bracketsConfig.reduce((acc, brackets) => {
      let concatConfig = brackets[0] + brackets[1];

      if (consequens.indexOf(concatConfig) !== -1) {
        consequens = consequens.replace(concatConfig, "");
      } else {
        acc++;
      }
      return acc;
    }, 0);

    result = bracketsConfig.length !== notMatchCount;
  }


  return result;
}

