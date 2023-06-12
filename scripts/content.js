window.addEventListener("load", function () {
  console.log("loaded page");
  const body = document.querySelector("body");
  // `document.querySelector` may return null if the selector doesn't match anything.
  if (body) {
    const text = body.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an body's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // Support for API reference docs
    const heading = body.querySelector("h1");
    // Support for body docs with date
    const date = body.querySelector("time")?.parentNode;
    // console.log(text);
    (date ?? heading).insertAdjacentElement("afterend", badge);
  }
});
