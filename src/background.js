
var rule2 = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { urlContains: 'amazon' },
    })

          // new chrome.declarativeContent.PageStateMatcher({
          //   pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
          //   css: ["input[type='password']"]
          // }),
          // new chrome.declarativeContent.PageStateMatcher({
          //   css: ["video"]
          // })
    ],
    actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule2]);
  });
});


