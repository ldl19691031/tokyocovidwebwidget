document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


$.get( "https://www3.nhk.or.jp/n-data/special/coronavirus/data/mhlw-latest-pref-data-max-map.json", function( data ) {
   area_data = data["data47"];
   value = area_data.filter(
              (data) => 
                  data["name"] === "東京都"
              )[0]["new"];
   $("#title").text(value);
});