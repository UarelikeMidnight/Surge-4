let url = "https://ipinfo.io/json?"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.ip
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let org = jsonData.org
    
  body = {
    title: "网络信息",
    content: `IP信息: ${ip}\n运营商: ${org}\nIP位置: ${emoji}${country} - ${city}`,
    icon: "link.icloud",
    'icon-color': "#5AC8FA"
  }
  $done(body);
});

	
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
