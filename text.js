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
          </button>`
        
        
   
    movieData.forEach((movie) => {
      const cardInfo =
                            
        ` <div class ="modal"> 
                              <div class="modalContent">
                              <span class="close">&times</span>
                              <p> this will be model content </p>
                              </div>
                              </div>
        </div>
      `
      bannerContainer.insertAdjacentHTML('beforeend', cardInfo)
  
  
    })
  
    let movieButtons = document.querySelectorAll(".movieButton")

    let modal = document.querySelectorAll(".modal")
    let closebtn = document.querySelector(".close")

    movieButtons.forEach((movieButton) => {
      movieButton.addEventListener('click', () => {
      
        // alert("clicked the poster")
      })
    })
  })
}
 
