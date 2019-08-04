const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

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

})
