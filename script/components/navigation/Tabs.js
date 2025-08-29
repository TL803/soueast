function getTabElements() {
  return {
    tabSpecsBtn: document.getElementById("tab-specs"),
    tabComplectationsBtn: document.getElementById("tab-complectations"),
    contentSpecs: document.getElementById("content-specs"),
    contentComplectations: document.getElementById("content-complectations")
  };
}

function hideElement(element) {
  if (element) element.classList.add("hidden");
}

function showElement(element) {
  if (element) element.classList.remove("hidden");
}

function setActiveButton(button) {
  if (!button) return;
  button.classList.remove(
    "border", "border-[#FE7600]", "text-white", "bg-transparent"
  );
  button.classList.add(
    "bg-[#FE7600]", "text-black", "font-semibold"
  );
}

function setInactiveButton(button) {
  if (!button) return;
  button.classList.remove("bg-[#FE7600]", "text-black", "font-semibold", "bg-[#111214]");
  button.classList.add(
    "bg-[#111214]", "border", "border-[#FE7600]", "text-[#FE7600]", "bg-[#111214]"
  );
}

function showTab(tabId) {
  const { tabSpecsBtn, tabComplectationsBtn, contentSpecs, contentComplectations } = getTabElements();

  hideElement(contentSpecs);
  hideElement(contentComplectations);

  setInactiveButton(tabSpecsBtn);
  setInactiveButton(tabComplectationsBtn);

  if (tabId === "specs" && contentSpecs) {
    setActiveButton(tabSpecsBtn);
    showElement(contentSpecs);
  } else if (tabId === "complectations" && contentComplectations) {
    setActiveButton(tabComplectationsBtn);
    showElement(contentComplectations);
  }
}

function setupTabListeners() {
  const { tabSpecsBtn, tabComplectationsBtn } = getTabElements();

  tabSpecsBtn?.addEventListener("click", () => showTab("specs"));
  tabComplectationsBtn?.addEventListener("click", () => showTab("complectations"));
}

function initTabs() {
  setupTabListeners();
  showTab("complectations");
}

document.addEventListener("DOMContentLoaded", initTabs);