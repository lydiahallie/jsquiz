const toKebabCase = (string: string): string =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

interface StyleString {
  [name: string]: string;
}

export function getStyles(obj: StyleString[]) {
  const formattedStyle = obj
    .reduce((acc, cur) => acc.concat(Object.entries(cur)), [])
    .map(style => ({ [toKebabCase(style[0])]: style[1] }));

  return `${formattedStyle.map(
    style => `${Object.keys(style)[0]}: ${Object.values(style)[0]}`
  )}`.replace(/[,]/g, ";");
}
