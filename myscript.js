chrome.runtime.sendMessage({
  action: "content",
  host: document.location.hostname,
  content: document.body.textContent
}, function() { });
