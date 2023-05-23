import { parseHtml } from "./DomParser";
import typewritter from "../markup/typewriter.html";

const main = document.createElement("main");
const typewriterElement = parseHtml(typewritter);
console.dir(typewriterElement);
main.append(typewriterElement);
document.body.append(main);
