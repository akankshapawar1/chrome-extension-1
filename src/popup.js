document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['dailyBite'], function (result) {
      const dailyBite = result.dailyBite;
      if (dailyBite) {
        const contentDiv = document.getElementById('content');
        const supportDiv = document.getElementById('support');
  
        contentDiv.innerHTML = `<strong>CSS Property:</strong> ${dailyBite.property}`;
        supportDiv.innerHTML = `<strong>Browser Support:</strong> <pre>${JSON.stringify(dailyBite.support, null, 2)}</pre>`;
      } else {
        document.getElementById('content').innerText = 'No daily bite available. Please try again tomorrow!';
      }
    });
  });
  