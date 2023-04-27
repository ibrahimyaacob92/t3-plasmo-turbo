import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*", "http://localhost:3000/*"],
};

window.addEventListener("load", () => {
  console.log("content script loaded");

  document.body.style.background = "pink";
});
