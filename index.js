

async function game_link(link_) {
  let response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
    link_)}`);
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    let json = await response.json();
    const html_ = json.contents

    const frame = document.getElementsByClassName("frame")[0]

    const iframe_parser = new DOMParser();
    const iframe_parsed = iframe_parser.parseFromString(html_, "text/html");
    const game = iframe_parsed.getElementsByClassName("iframe_placeholder")[0]

    var data_game = game.getAttribute("data-iframe")

    const game_link = iframe_parser.parseFromString(data_game, "text/html").getElementsByTagName("iframe")[0].getAttribute("src")



    game_frame = document.createElement("iframe");
    game_frame.setAttribute("src", game_link);
    game_frame.setAttribute("class", "game_code");
    document.getElementsByClassName("game")[0].appendChild(game_frame);
    document.getElementsByClassName("load")[0].removeChild(document.getElementsByClassName("frame")[0])
    /*const game_html = iframe_parser.parseFromString(document.getElementsByClassName("game")[0], "text/html")
    console.log(document.getElementsByClassName("game")[0].outerHTML)
    game_html.getElementById("canvas")[0].setAttribute("width", "100vw").setAttribute("height", "100vh")


    //console.log(html_)
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html_, "text/html");
    const games = parsed.getElementsByClassName("grid_outer"); // "title"

    //const games_list = parsed.getElementsByClassName("game_grid_widget base_widget browse_game_grid")[0].innerHTML
    //const games_parsed = parser.parseFromString(games_list, "text/html")
    const games_img_list = parser.parseFromString(games[0].innerHTML, "text/html").querySelectorAll("img")
    //for (const el of games__img_list) {
    //console.log(el.getAttribute("data-lazy_src"))
    //}

    const tmp_games_list = Array.from(parser.parseFromString(games[0].innerHTML, "text/html").getElementsByClassName("game_grid_widget base_widget browse_game_grid")[0].querySelectorAll("div"))
    const games_list = []
    for (const el of tmp_games_list) {
      if (el.className != "game_thumb") {
      }
      else {
        games_list.push(el)
      }
    }
 
    for (const el of games_list) {
      var new_ = document.createElement('img');
      const img_class = el.querySelector("a")
      new_.innerHTML = '<img src="pic_trulli.jpg" alt="Italian Trulli">'
      console.log(img_class)
    }
    
    document.body.innerHTML += '<link rel="stylesheet" href="https://static.itch.io/main.css?1691767105">';
    document.body.innerHTML += '<script src="https://static.itch.io/lib.min.js?1691767106" type="text/javascript"></script>'
    document.body.innerHTML += '<script id="lib_react_src" data-src="https://static.itch.io/react.min.js?1691767106"></script>'
    document.body.innerHTML += '<script defer="" src="https://static.itch.io/selectize.min.js?1691767106" type="text/javascript"></script>'
    document.body.innerHTML += '<script src="https://static.itch.io/browse_games.min.js?1691767106" type="text/javascript"></script>'
    document.body.innerHTML += '<link rel="stylesheet" href="https://static.itch.io/selectize.min.css">'
    document.body.innerHTML += '<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-36R7NPBMLS&amp;cx=c&amp;_slc=1"></script>'
    document.body.innerHTML += '<script type="text/javascript" async="" src="https://www.google-analytics.com/plugins/ua/ecommerce.js"></script>'
    document.body.innerHTML += '<script async="" src="//www.google-analytics.com/analytics.js"></script>'


    document.body.innerHTML += html_
    */
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

}
game_link("https://auroriax.itch.io/mobility")
