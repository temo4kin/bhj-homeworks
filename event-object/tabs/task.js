const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabsContent[i].classList.toggle('tab__content_active');
    tab.classList.toggle('tab_active');
  });
});