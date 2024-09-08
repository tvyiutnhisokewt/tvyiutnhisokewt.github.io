// fetch latest commit from OTA repo
fetch('https://api.github.com/repos/tvyiutnhisokewt/OTA_Evolution-X/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('latest-commit').innerHTML = "latest push is: " + res[0].commit.message;
  })

// fetch download links
fetch('https://raw.githubusercontent.com/tvyiutnhisokewt/OTA_Evolution-X/main/builds/bluejay.json')
  .then(res => res.json())
  .then(res => {
    document.getElementById('bluejay').href = res.response[0].download
  })
fetch('https://raw.githubusercontent.com/tvyiutnhisokewt/OTA_Evolution-X/main/builds/coral.json')
  .then(res => res.json())
  .then(res => {
    document.getElementById('coral').href = res.response[0].download
  })
  