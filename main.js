/** 
* @param img_index
* @param item_index
*/

async function clickedEvent(img_index, item_index) {
  let art = document.getElementsByTagName('img')[img_index].attributes[2].value;

  let headers = new Headers([
    ['Content-Type', 'application/json']
  ]);

  let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${art}`, {
    method: 'GET',
    headers: headers
  });

  let result = await fetch(request);

  let response = await result.json();

  console.log(response)
}

/** 
* @param id
* @param event
*/

function getArt(id, event) {
  switch(id) {
    case 'fig1': {
      event.stopPropagation();
      clickedEvent(0,0)
      break;
    }
    case 'fig2': {
      event.stopPropagation();
      clickedEvent(1,0)
      break;
  }
  case 'fig3': {
      event.stopPropagation();
      clickedEvent(2,0)
      break;
  }
  case 'fig4': {
      event.stopPropagation();
      clickedEvent(3,0)
      break;
  }
  case 'fig5': {
      event.stopPropagation();
      clickedEvent(4,0)
      break;
  }
  case 'fig6': {
      event.stopPropagation();
      clickedEvent(5,0)
      break;
  }
}
}



