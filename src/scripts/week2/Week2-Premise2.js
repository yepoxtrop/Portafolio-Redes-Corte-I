"use strict";
const cards = [
  {
    id: "connectivity",
    problem: "Connected to Wi-Fi. Still cannot open the classroom platform.",
    proposal: "Check the full path to the service, not just the Wi-Fi icon.",
  },
  {
    id: "performance",
    problem: "The class gets busy. The video call freezes.",
    proposal: "Find the bottleneck before buying more bandwidth.",
  },
  {
    id: "security",
    problem:
      "Guests and school staff share a network with weak access controls.",
    proposal: "Give each group only the access it needs.",
  },
  {
    id: "availability",
    problem: "One central device fails. Important services stop.",
    proposal: "Prepare for failures instead of hoping they never happen.",
  },
  {
    id: "scalability",
    problem: "A new classroom opens. Ports, addresses or capacity run short.",
    proposal: "Plan the next classroom before it arrives.",
  },
  {
    id: "management",
    problem: "A setting changed. Nobody knows what changed or why.",
    proposal: "Make the network easier to understand and recover.",
  },
  {
    id: "experience",
    problem:
      "Technical checks look fine. Students still cannot finish their tasks.",
    proposal:
      "Test real activities and listen to the people using the network.",
  },
];
const modeButtons = [...document.querySelectorAll("[data-view]")];
modeButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const proposed = button.dataset.view === "proposal";
    modeButtons.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    cards.forEach((card) => {
      const element = document.querySelector('[data-card="' + card.id + '"]');
      element.querySelector(".snapshot-label").textContent = proposed
        ? "OUR PROPOSAL"
        : "THE PROBLEM";
      element.querySelector(".snapshot-text").textContent = proposed
        ? card.proposal
        : card.problem;
    });
    document.getElementById("view-status").textContent = proposed
      ? "Showing proposed improvements — these have not been implemented or measured."
      : "Showing problems in our hypothetical school network.";
  }),
);
document.getElementById("view-controls").hidden = false;
const motionButton = document.getElementById("motion");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let motionEnabled = !motionPreference.matches;
function setMotion(enabled) {
  motionEnabled = enabled;
  document.body.dataset.motion = enabled ? "on" : "off";
  motionButton.setAttribute("aria-pressed", String(enabled));
  motionButton.textContent = enabled ? "Motion: on ✨" : "Motion: off";
}
setMotion(motionEnabled);
motionButton.hidden = false;
motionButton.addEventListener("click", () => setMotion(!motionEnabled));
motionPreference.addEventListener("change", (event) =>
  setMotion(!event.matches),
);
// The enclosing modal can close even while focus is inside this iframe.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && window.parent !== window) {
    window.parent.postMessage({ type: "week2-premise2-close" }, "*");
  }
});
