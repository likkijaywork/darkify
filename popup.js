let btn = document.getElementById('myBtn');

btn.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setBackgroundColor
  });
});

function setBackgroundColor() {
  console.log(document.body.style.backgroundColor);
  chrome.storage.sync.get('color', ({ color }) => {
    if (document.body.style.backgroundColor === '') {
      document.body.style.backgroundColor = color;
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  });
}