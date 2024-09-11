// fetch latest commit from OTA repo
fetch('https://api.github.com/repos/tvyiutnhisokewt/OTA_Evolution-X/commits?path=builds/coral.json&per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('commit-coral').innerHTML = res[0].commit.message;
  })
fetch('https://api.github.com/repos/tvyiutnhisokewt/OTA_Evolution-X/commits?path=builds/bluejay.json&per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('commit-bluejay').innerHTML = res[0].commit.message;
  })

// fetch download links
fetch('https://raw.githubusercontent.com/tvyiutnhisokewt/OTA_Evolution-X/main/builds/bluejay.json')
  .then(res => res.json())
  .then(res => {
    document.getElementById('dl-bluejay').href = res.response[0].download
  })
fetch('https://raw.githubusercontent.com/tvyiutnhisokewt/OTA_Evolution-X/main/builds/coral.json')
  .then(res => res.json())
  .then(res => {
    document.getElementById('dl-coral').href = res.response[0].download
  })

// fetch filenames
fetch('https://raw.githubusercontent.com/tvyiutnhisokewt/OTA_Evolution-X/main/builds/bluejay.json')
  .then(res => res.json())
  .then(res => {
    document.getElementById('filename-bluejay').innerHTML = res.response[0].filename
  })
fetch('https://raw.githubusercontent.com/tvyiutnhisokewt/OTA_Evolution-X/main/builds/coral.json')
  .then(res => res.json())
  .then(res => {
    document.getElementById('filename-coral').innerHTML = res.response[0].filename
  })