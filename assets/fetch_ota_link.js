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