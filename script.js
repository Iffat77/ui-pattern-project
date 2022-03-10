 
// iterate through the array creating divs with loop
// use loop to create poster and information
let bannerContainer = document.querySelector("#banner-container")

fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    renderResults(data)
  })
    

function renderResults(movieData) {

  movieData.forEach((movie) => {
      const cardInfo = `
        <div class="movieBanner">
        <button class="movieButton">
          <img src="${movie.image}"/>
          </button>
        </div>
      `
      bannerContainer.insertAdjacentHTML('beforeend', cardInfo)
  })

  let movieButtons = document.querySelectorAll(".movieButton")

  movieButtons.forEach((movieButton) => {
    movieButton.addEventListener('click', () => {
      alert("clicked the poster")
    })
  })
}
  
