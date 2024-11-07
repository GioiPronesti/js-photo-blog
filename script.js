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

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.querySelector(".row");

  function fecthPhothos() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
      .then((response) => {
        const photos = response.data;
        let photosHTML = "";
        photos.forEach((photo) => {
          photosHTML += `
            
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
            </div>`;
        });
        blogContainer.innerHTML = photosHTML;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  fecthPhothos();
});
