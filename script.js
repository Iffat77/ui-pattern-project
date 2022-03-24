
let bannerContainer = document.querySelector("#banner-container")
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modalInnerText")
let span = document.querySelector("span")
let originalTitleText = document.querySelector(".originalTitleText")
let director = document.querySelector(".director")
let scrolling = document.querySelectorAll(".scroll-button")
let leftScroll = document.querySelector("#left")
let rightScroll = document.querySelector("#right")

// scroll funtion for horizontal scrolling of banner cont
rightScroll.onclick = function () {
  let container = document.querySelector("#banner-container")
  sideScroll(container,'right',45,800,60)
}

leftScroll.onclick = function () {
  let container = document.querySelector("#banner-container")
  sideScroll(container,'left',45,800,60);
}

function sideScroll(element,direction,speed,distance,step){
  scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction == 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
  
}

// grabbing data from api
fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    renderResults(data)
  })
    
// function to iretate through every movie image and id and assign it to card info and then insert it into the banner container
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
  // iteration thgough each movie adding an eventlistener and when clicked returns specific movie id value to movieFound
  movieBanner.forEach((movieButton) => {
    movieButton.addEventListener('click', (e) => {
      let movieFound = movieData.find((movie) => {
        return movie.id === e.target.name
      })
  // using the movieFound to to match appropiate movie 
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
 
  

