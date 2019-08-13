const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const pictureOne = document.querySelector('#image-1')
//messageOne.textContent = "From Javascript"

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const location = search.value

  messageOne.textContent = "Loading"
  messageTwo.textContent = ""


  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error){
        console.log(data.error)
        messageOne.textContext = "Error"
      }
      else {
        console.log(data.location)
        console.log(data.forecast)
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })

  var client_id = "e72d3972ba3ff93da57a4c0be4f0b7323346c136b73794e2a01226216076655b"
  var query = location
  var url = "https://api.unsplash.com/search/photos?page=1&query=" + encodeURIComponent(query) + "&client_id=" + client_id

  fetch(url)
    .then(res => res.json())
    .then(json => pictureOne.src = json.results[0].urls.thumb);
  



})
