function updateText(refferenceText, target, speed = 40) {
  if (refferenceText.length < 1) return;
  setTimeout(() => {
    const nextLetter = refferenceText.shift();
    target.textContent += nextLetter;
    return updateText(refferenceText, target);
  }, speed);
}

// const typewriterElement = class {
//   constructor({ selector }) {
//     this.DOMRefference = selector;
//   }

//   typewritter(htmlElement) {
//     const descendant = htmlElement.querySelector("*");
//     const text = descendant?.textContent;
//     if (!text) return;
//     descendant.textContent = "";
//   }
// };
const typeWriterElement = document.querySelector(".typewriter");
const { textContent } = typeWriterElement;
const textArray = textContent.split("");
typeWriterElement.textContent = "";
updateText(textArray, typeWriterElement);

export default 42;
