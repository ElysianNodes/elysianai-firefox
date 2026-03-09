// Background script for ElysianAI extension
chrome.browserAction.onClicked.addListener(async (tab) => {
  try {
    // Toggle the sidebar
    await chrome.sidebarAction.open();
  } catch (error) {
    console.error('Error opening sidebar:', error);
  }
});

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('ElysianAI extension installed');
});
