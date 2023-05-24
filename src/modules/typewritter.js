import configObject from "./configObject";

function updateText(refferenceText, target, cssHiddenClass, speed) {
  if (refferenceText.length < 1) {
    return checkNextElement(target, cssHiddenClass, speed);
  }
  setTimeout(() => {
    const nextLetter = refferenceText.shift();
    target.textContent += nextLetter;
    return updateText(refferenceText, target, cssHiddenClass, speed);
  }, speed);
}

function checkNextElement(currentElement, cssHiddenClass, speed) {
  const sibling = currentElement.nextElementSibling;
  if (!sibling) return;
  return extractTextAndUpdate(sibling, cssHiddenClass, speed);
}

function extractTextAndUpdate(element, cssHiddenClass, speed) {
  const { textContent } = element;
  const textArray = textContent.split("");
  element.textContent = "";
  element.classList.remove(cssHiddenClass);
  updateText(textArray, element, cssHiddenClass, speed);
}

function hideChildren({ cssHiddenClass, children }) {
  Array.from(children).forEach((childElement) => {
    childElement.classList.add(cssHiddenClass);
  });
}

function startTypeWriter({ selector, speed, cssHiddenClass } = configObject) {
  const typeWriterElement = document.querySelector(selector);
  const { children } = typeWriterElement;
  const typeWriterFirstChild = children[0];
  hideChildren({ cssHiddenClass, children });
  extractTextAndUpdate(typeWriterFirstChild, cssHiddenClass, speed);
}
startTypeWriter();
export default 42;
