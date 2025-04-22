let message = document.querySelector ('#message')
let pingButton = document.querySelector ('#pingButton')


pingButton.addEventListener('click',getPingfromWS)
function getPingfromWS() {

  const url= 'http://localhost:3001/ping'

  fetch(url)
    .then((response) => {
      return response.json()
  })
    .then((data) => {
      console.log(data)
      message.innerHTML = data.message
    })
    .catch((error) => {
      console.error('Error:', error);
      message.innerHTML = 'imposible conectarse con el servidor'
  })
}

//pingButton.addEventListener('click',getPing)

//function getPing() {
//  console.log('pong')
//  message.innerHTML = 'pong'
//}