globalThis.ZOVO_WHATS_NEW = Object.freeze({
  "version": "1.0.41",
  "name": "Tab Suspender Pro",
  "id": "ofgncemnlblfnocjbojdhamacfffcpnm",
  "slug": "tab-suspender-pro",
  "date": "2026-11-02",
  "changes": [
    {
      "type": "improved",
      "text": "You can now get Zovo Lifetime free in two ways. Invite 5 friends to Zovo Chat on Telegram, or make 5 public posts. This page and Settings show both ways."
    },
    {
      "type": "improved",
      "text": "The popup can show a short note about Zovo Chat. It shows at most twice, never next to the rating note, and Don't show this again turns it off."
    }
  ],
  "friendsInvite": "https://t.me/+2NUpl3OL1XxiZWQ0",
  "stats": [
    {
      "area": "local",
      "key": "memoryStats",
      "path": "tabsSuspended",
      "label": "tabs put to sleep"
    }
  ],
  "tips": [
    "A suspended tab keeps its place in the tab strip. Click it to bring the page back.",
    "Settings has a Recovery list of filed tabs, so you can reopen them after a crash or a restart.",
    "Add a site to the whitelist in Settings to keep it awake."
  ],
  "signal": {
    "area": "local",
    "key": "memoryStats",
    "path": "tabsSuspended",
    "min": 50,
    "line": "You've put {n} tabs to sleep with it."
  },
  "installedAt": {
    "area": "local",
    "key": "installDate"
  },
  "lifetime": {
    "area": "local",
    "activeKey": "isPro",
    "tierKey": "tier",
    "tiers": ["lifetime"]
  },
  "icon": "icon.png"
});
