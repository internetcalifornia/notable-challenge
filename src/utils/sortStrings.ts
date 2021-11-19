export const sortStrings = (a: string, b: string): 1 | -1 => {
  const str1ASCIIcode = a.split("").map((char) => char.charCodeAt(0));
  const str2ASCIIcode = b.split("").map((char) => char.charCodeAt(0));
  for (let charCodeInd in str1ASCIIcode) {
    const aChar = str1ASCIIcode[charCodeInd];
    const bChar = str2ASCIIcode[charCodeInd];
    // a string is longer so just return 1
    if (bChar == null) {
      return 1;
    }
    // same char so loop again
    if (aChar === bChar) {
      continue;
    }
    // a less than b
    if (aChar < bChar) {
      return -1;
    }
    // b less than a
    return 1;
  }
  return 1;
};
