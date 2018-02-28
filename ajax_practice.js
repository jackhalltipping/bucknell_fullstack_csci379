document.getElementById("dog_button")
  .addEventListener('click', loadAjax)


function loadAjax(event) {
  console.log(event)
  var url = "https://dog.ceo/api/breeds/list/all"

  console.log("making fetch to", url)

  fetch(url)
    .then(resp=>{
      return resp.json()
    })
    .then(json=>{
      console.log(json)
      document.getElementById("dog_container")
        .innerHtml = "<ol>" +
          json.message.beagle + "<ol>"
    })
}
