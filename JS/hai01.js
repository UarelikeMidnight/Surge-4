let url = "https://ipinfo.io/json?token=d415d0d57e45a3"

$.ajax(url).done(function (response) {
   var isp = response.ip
   var city = response.city
   var country = response.country
   var ip = response.ip
   var region = response.region
   
	body = {
    title: "网络信息",
    content: `IP信息: ${ip}\n国家: ${emoji}${country}\nIP位置: ${region} - ${city}`,
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
