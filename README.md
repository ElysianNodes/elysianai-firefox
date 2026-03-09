# ElysianAI Browser Extension

A Chrome and Firefox extension that opens the ElysianAI billing panel in a browser sidebar.

## Features

- Opens ElysianAI billing panel (https://billing.elysiannodes.uk/ai) in a sidebar
- Clean, modern interface with loading states
- Cross-browser compatibility (Chrome/Firefox)
- Minimal permissions required

## Installation

### [Chrome/Chromium](https://github.com/ElysianNodes/elysianai-chrome)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select this [extension](https://github.com/ElysianNodes/elysianai-chrome) folder

### Firefox

1. Open Firefox and go to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file in this folder

## Usage

1. Click the ElysianAI icon in your browser toolbar
2. The sidebar will open with the billing panel
3. The sidebar can be resized and will persist across sessions

## Development

### File Structure

```
ElysianAIextension/
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── sidebar.html           # Sidebar HTML with iframe
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

### Adding Icons

Replace the placeholder icons in the `icons/` directory with your actual extension icons. Each size should be:

- 16x16 pixels for toolbar
- 32x32 pixels for extensions page
- 48x48 pixels for extension management
- 128x128 pixels for web store

## Permissions

The extension requests minimal permissions:

- `activeTab`: Required to interact with the current tab
- Note: The iframe will request access to `https://billing.elysiannodes.uk/*` automatically

## Compatibility

- Firefox 48+ (Manifest V2 with sidebar_action)
- [Chrome](https://github.com/ElysianNodes/elysianai-chrome) 88+ (Manifest V2 - for V3 compatibility)
