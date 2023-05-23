const parser = new DOMParser();

export function parseHtml(markup) {
  const element = parser.parseFromString(markup, "text/xml");
  return element.querySelector("*");
}
