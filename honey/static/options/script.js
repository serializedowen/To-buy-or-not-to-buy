function saveOptions() {
  var trackPageViews = true;
  var trackProductViews = true;
  if (!document.getElementById('page-view-track').checked) {
    trackPageViews = false;
  }
  if (!document.getElementById('prod-view-track').checked) {
    trackProductViews = false;
  }

  chrome.storage.sync.set({ 'config:trackPageViews': trackPageViews });
  chrome.storage.sync.set({ 'config:trackProductViews': trackProductViews });

  var save = document.getElementById('save');
  save.textContent = 'Saving...';
  save.disabled = true;
  setTimeout(function() {
    save.textContent = 'Saved';
    save.disabled = false;
  }, 800);
}


function restoreOptions() {

  var keys = ['config:trackPageViews', 'config:trackProductViews'];
  chrome.storage.sync.get(keys, function (res) {
    document.getElementById('page-view-track').checked = !(res['config:trackPageViews'] === false);
    document.getElementById('prod-view-track').checked = !(res['config:trackProductViews'] === false);
  });

}


restoreOptions();
var save = document.getElementById('save')
save.onclick = saveOptions;
