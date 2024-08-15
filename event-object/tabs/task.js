const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab-content');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // tabsContent.forEach((tabContent) => {
    //   tabContent.classList.toggle('tab__content_active');
    // });
    let tabIndex = tabs.indexOf(tab);
    console.log(tab, tabIndex);
    tabsContent[tabIndex].classList.toggle('tab__content_active');
    tab.classList.classList.toggle('tab_active');
  });
});