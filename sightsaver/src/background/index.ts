// Every time a new tab is opened, the extension checks if the current tab is in the blocked list. If it is, the extension will redirect the user to the blocked page. The extension also keeps track of the time spent on each site and blocks the site if the time limit is reached.
import { getTimeLimit, getBlockedList, getTimeUsed, setTimeUsed } from "../utils";
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        // Log
        console.log(`Tab updated: ${tab.url}`);
        const blockedList = await getBlockedList();
        blockedList.forEach((site) => {
            if (tab.url.includes(site)) {
                chrome.tabs.update(tabId, { url: chrome.runtime.getURL('sidepanel.html') });
            }
        }
        );

    }
});
