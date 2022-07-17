const tabs = document.querySelectorAll(".AboutSkills-Tabs input");
tabs.forEach((tab, index) => {
  tab.addEventListener("change", handleOnChangeTab);
});

function handleOnChangeTab(e) {
  const sections = document.querySelectorAll(".AboutSkills-Card");
  sections.forEach((section, index) => {
    section.classList.remove("is-active");
  });

  document.getElementById(e.target.dataset.section).classList.add("is-active");
}
