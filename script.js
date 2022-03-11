// iterate through the array creating divs with loop
// use loop to create poster and information
let bannerContainer = document.querySelector("#banner-container")
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modalInnerText")
let span = document.querySelector("span")
let originalTitleText = document.querySelector(".originalTitleText")
let director = document.querySelector(".director")

// let righButton = document.getElementById("button");
// let leftButton = document.getElementById("button");





fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    renderResults(data)
  })
    

function renderResults(movieData) {
console.log(movieData)
  movieData.forEach((movie) => {
      const cardInfo = `
        <div class="movieBanner">
          <img src="${movie.image}"/ name="${movie.id}">
        </div>
      `
      bannerContainer.insertAdjacentHTML('beforeend', cardInfo)
  })
  
  let movieBanner = document.querySelectorAll(".movieBanner")

  movieBanner.forEach((movieButton) => {
    movieButton.addEventListener('click', (e) => {
      let movieFound = movieData.find((movie) => {
        return movie.id === e.target.name
      })

      modalContent.textContent = movieFound.description
      originalTitleText.textContent =` Title:  ${ movieFound.original_title }`                  
      director.textContent = `Director: ${movieFound.director}`
      modal.style.display = "block"

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    })
  })
}
 



// add function where once a poster is clicked it a
// box should appear in the center of the screen with 
// the details for the item that the user clicks on

// create div with class modal
// create another div inside of class modal div to hold modal content
//create <p> inside to hold content
// create <span> to be able to close modal




//create buttons and style

//set default display none

// when content loads make buttons visible