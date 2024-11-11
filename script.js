/*
<div class="col">
    <!-- card 1 -->
        <div class="card">
            <!-- card pin -->
            <img class="pin-img" src="./img/pin.svg" alt="pin" />

            <!-- card photo -->
                <div class="card-box">
                  <img
                    class="img-card"
                    src="https://picsum.photos/200/200"
                    alt="image card"
                  />
                </div>
            <!-- card body -->
            <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title
                </p>
            </div>
        </div>
</div>
*/
const overlayElement = document.querySelector(".container-overlay");
const btnElement = document.querySelector(".btn-close");
const bodyElement = document.getElementById("body");

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.querySelector(".row");

  function fetchPhothos() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
      .then((response) => {
        // Hai i dati delle foto
        const photos = response.data;
        let photosHTML = "";
        photos.forEach((photo) => {
          photosHTML += `
            
            <div class="col">
              
                <div class="card">
                  <!-- card pin -->
                    <img class="pin-img" src="./img/pin.svg" alt="pin" />

                    <img
                      class="img-card"
                      src="${photo.thumbnailUrl}"
                      alt="image card"
                    />   

                    <p>${photo.title}</p>
                </div>
            </div>`;
        });
        blogContainer.innerHTML = photosHTML;
        // Da qui gli elementi della stringa diventano elementi del DOM e quindi posso cercarli
        //console.log(document.querySelectorAll(".card"));
        const cards = document.querySelectorAll(".card");

        for (let i = 0; i < cards.length; i++) {
          const cardImageEl = cards[i].querySelector("img.img-card");

          const cardImageSrc = cardImageEl.src;
          cards[i].addEventListener("click", () => {
            //console.log(cardImageSrc);

            const overlayImageEl = document.querySelector("img.img-focus");
            //console.log(overlayImageEl);
            overlayImageEl.src = cardImageSrc;

            bodyElement.classList.add("overflow-hidden");
            overlayElement.classList.remove("overlay-display-none");
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  fetchPhothos();
});

//console.log(overlayElement);
//console.log(btnElement);

btnElement.addEventListener("click", () => {
  overlayElement.classList.add("overlay-display-none");
  //console.log("close btn is clicked");
  bodyElement.classList.remove("overflow-hidden");
});
