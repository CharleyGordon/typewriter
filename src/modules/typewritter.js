import configObject from "./configObject";

function signAsTyping(element, typingCssClass) {
  if (!element) return;
  element.classList.add(typingCssClass);
}
function unsignTypingClass(element, typingCssClass) {
  element.classList.remove(typingCssClass);
}

function updateText({
  refferenceText,
  target,
  cssHiddenClass,
  speed,
  typingCssClass,
}) {
  signAsTyping(target, typingCssClass);
  if (refferenceText.length < 1) {
    unsignTypingClass(target, typingCssClass);
    return checkNextElement(target, cssHiddenClass, speed, typingCssClass);
  }
  setTimeout(() => {
    const nextLetter = refferenceText.shift();
    target.textContent += nextLetter;
    return updateText({
      refferenceText,
      target,
      cssHiddenClass,
      speed,
      typingCssClass,
    });
  }, speed);
}

function checkNextElement(
  currentElement,
  cssHiddenClass,
  speed,
  typingCssClass
) {
  const sibling = currentElement.nextElementSibling;
  if (!sibling) return;
  extractTextAndUpdate(sibling, cssHiddenClass, speed, typingCssClass);
}

function extractTextAndUpdate(element, cssHiddenClass, speed, typingCssClass) {
  const { textContent } = element;
  const refferenceText = textContent.split("");
  element.textContent = "";
  element.classList.remove(cssHiddenClass);
  updateText({
    refferenceText,
    target: element,
    cssHiddenClass,
    speed,
    typingCssClass,
  });
}

function hideChildren({ cssHiddenClass, children }) {
  Array.from(children).forEach((childElement) => {
    childElement.classList.add(cssHiddenClass);
  });
}

function startTypeWriter({
  selector,
  speed,
  cssHiddenClass,
  typingCssClass,
} = configObject) {
  const typeWriterElement = document.querySelector(selector);
  const { children } = typeWriterElement;
  const typeWriterFirstChild = children[0];
  hideChildren({ cssHiddenClass, children });
  extractTextAndUpdate(
    typeWriterFirstChild,
    cssHiddenClass,
    speed,
    typingCssClass
  );
}
startTypeWriter();
export default 42;
