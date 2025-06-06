let editorInstance;

// Simple converter from Editor.js data blocks to HTML
function editorDataToHTML(data) {
  if (!data || !data.blocks) return "";

  let html = "";

  data.blocks.forEach((block) => {
    switch (block.type) {
      case "header":
        // Use level from data or default to h2
        const level = block.data.level || 2;
        html += `<h${level}>${block.data.text}</h${level}>`;
        break;

      case "paragraph":
        html += `<p>${block.data.text}</p>`;
        break;

      case "list":
        const tag = block.data.style === "ordered" ? "ol" : "ul";
        html += `<${tag}>`;
        block.data.items.forEach((item) => {
          html += `<li>${item}</li>`;
        });
        html += `</${tag}>`;
        break;

      // Add more cases for other block types if needed

      default:
        console.warn("Unsupported block type:", block.type);
        break;
    }
  });

  return html;
}

document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const copyButton = document.getElementById("copyButton");
  const outputHtmlElement = document.getElementById("output-html");
  const copyToast = document.getElementById("copyToast");

  function showCopyToast() {
    copyToast.classList.add("show");
    setTimeout(() => {
      copyToast.classList.remove("show");
    }, 1500);
  }

  setTimeout(() => {
    if (typeof EditorJS === "undefined") {
      console.error("EditorJS is not defined. Ensure CDN scripts are loaded.");
      saveButton.disabled = true;
      copyButton.disabled = true;
      outputHtmlElement.textContent = "Error: Editor.js failed to load.";
      return;
    }

    editorInstance = new EditorJS({
      holder: "editorjs",
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a heading",
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
      },
      placeholder: "Start writing your article here...",
      autofocus: true,
      logLevel: "WARN",
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "Welcome to Editor.js!",
              level: 2,
            },
          },
          {
            type: "paragraph",
            data: {
              text: "This is a simple demo of a rich text editor that generates HTML output.",
            },
          },
          {
            type: "list",
            data: {
              style: "unordered",
              items: ["Easy to use", "Extensible", "Beautiful UI"],
            },
          },
        ],
      },
    });
  }, 0);

  saveButton.addEventListener("click", async () => {
    if (!editorInstance) return;

    try {
      const savedData = await editorInstance.save();

      // Convert JSON to HTML and show
      const renderedHTML = editorDataToHTML(savedData);
      outputHtmlElement.innerHTML = renderedHTML;

      copyButton.disabled = false;
    } catch (error) {
      console.error("Saving failed:", error);
      outputHtmlElement.textContent = "Error generating HTML content.";
      copyButton.disabled = true;
    }
  });

  copyButton.addEventListener("click", () => {
    const textToCopy = outputHtmlElement.innerHTML;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showCopyToast();
    });
  });
});
