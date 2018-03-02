document.getElementById("dog_button")
  .addEventListener('click', loadAjax)


function loadAjax(event) {
  console.log(event)
  var url = "https://dog.ceo/api/breeds/image/random"

  console.log("making fetch to", url)

  fetch(url)
    .then(resp=>{
      return resp.json()
    })
    .then(json=>{
      console.log(json)
      document.getElementById("dog_container")
        .innerHTML = "<img src=" + json.message + ">"
      console.log("success!")
    })
    .catch(console.log);
}
