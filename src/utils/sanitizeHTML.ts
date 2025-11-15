/**
 * 富文本 XSS 消毒工具函数
 * 基于白名单机制，仅允许安全的标签和属性
 */
const sanitizeHTML = (dirtyHTML: string): string => {
  if (!dirtyHTML) return "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(dirtyHTML, "text/html");

  if (!doc.body) {
    const tempDiv = document.createElement("div");
    tempDiv.textContent = dirtyHTML;
    return tempDiv.innerHTML;
  }

  const allowedTags = new Set([
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "del",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "blockquote",
    "pre",
    "code",
    "a",
    "img",
    "span",
    "div",
  ]);

  const allowedAttributes: Record<string, Set<string>> = {
    "*": new Set(["class", "style"]),
    a: new Set(["href", "title", "target", "rel"]),
    img: new Set(["src", "alt", "width", "height", "title"]),
  };

  const cleanNode = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      const tagName = element.tagName.toLowerCase();

      if (!allowedTags.has(tagName)) {
        element.replaceWith(document.createTextNode(element.textContent || ""));
        return;
      }

      Array.from(element.attributes).forEach((attr) => {
        const attrName = attr.name.toLowerCase();
        const tagAllowed = allowedAttributes[tagName] || new Set();
        const globalAllowed = allowedAttributes["*"] || new Set();

        if (
          (!tagAllowed.has(attrName) && !globalAllowed.has(attrName)) ||
          attrName.startsWith("on")
        ) {
          element.removeAttribute(attr.name);
        }

        if (attrName === "href" || attrName === "src") {
          const url = attr.value.toLowerCase();
          if (url.includes("javascript:") || url.includes("onerror=")) {
            element.removeAttribute(attr.name);
          }
        }
      });
    }

    Array.from(node.childNodes).forEach(cleanNode);
  };

  cleanNode(doc.body);

  return doc.body.innerHTML;
};

export default sanitizeHTML;
