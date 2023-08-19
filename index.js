

async function main() {
  let response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
    'https://itch.io/games/free/html5/platform-web/tag-2d')}`);
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    let json = await response.json();
    const html_ = json.contents
    //console.log(html_)
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html_, "text/html");
    const games = parsed.getElementsByClassName("grid_outer")[0].innerHTML; // "title"
    
    document.body.innerHTML += '<link rel="stylesheet" href="https://static.itch.io/main.css?1691767105">';
    document.body.innerHTML += '<script src="https://static.itch.io/lib.min.js?1691767106" type="text/javascript"></script>'
    document.body.innerHTML += '<script id="lib_react_src" data-src="https://static.itch.io/react.min.js?1691767106"></script>'
    document.body.innerHTML += '<script defer="" src="https://static.itch.io/selectize.min.js?1691767106" type="text/javascript"></script>'
    document.body.innerHTML += '<script src="https://static.itch.io/browse_games.min.js?1691767106" type="text/javascript"></script>'
    document.body.innerHTML += '<link rel="stylesheet" href="https://static.itch.io/selectize.min.css">'
    document.body.innerHTML += '<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-36R7NPBMLS&amp;cx=c&amp;_slc=1"></script>'
    document.body.innerHTML += '<script type="text/javascript" async="" src="https://www.google-analytics.com/plugins/ua/ecommerce.js"></script>'
    document.body.innerHTML += '<script async="" src="//www.google-analytics.com/analytics.js"></script>'
    
    
    document.body.innerHTML += games

    console.log(parsed.getElementsByClassName("game_grid_widget base_widget browse_game_grid"))    

  } else {
    alert("Ошибка HTTP: " + response.status);
  }

}
main()