const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab-content');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // tabsContent.forEach((tabContent) => {
    //   tabContent.classList.toggle('tab__content_active');
    // });
    tabsContent[tabs.indexOf(tab)].toggle('tab__content_active');
    tab.classList.toggle('tab_active');
  });
});