let color = 'black';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Background color set to %cblack', `color: ${color}`);
});