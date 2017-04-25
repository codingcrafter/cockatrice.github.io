var githubReleasesAPI = "https://api.github.com/repos/Cockatrice/Cockatrice/releases/latest";
$.getJSON(githubReleasesAPI, function (json) {
    var win64 = ''
    var macOS = ''
    var ubuntu = ''
    for (asset of json.assets) {
      url = asset.browser_download_url
      if (url.includes('win64.exe')) {
        win64 = url
      }
      else if (url.includes('osx.dmg')) {
        macOS = url
      }
      else if (url.includes('trusty.deb')) {
        ubuntu = url
      }
    }
    $('#win64').attr('href', win64);
    $('#macOS').attr('href', macOS);
    $('#ubuntu').attr('href', ubuntu);
});