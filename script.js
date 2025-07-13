// //   console.log("NailArt")

  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");
  }

fetch("./data/nails.json")
.then((response) => response.json())
.then((data) => {
    let nailVar = "";
    data.forEach(nail => {
        nailVar += `
         <div class="card" data-aos="fade-up" data-aos-duration="3000">
      <div class="card-img">
        <img src="${nail.image}" alt="">
      </div>
      <div class="card-detail">
        <h4>${nail.name}</h4>
        <p>${nail.detail}</p>
      </div>
    </div>
        `

        document.getElementById("design-cards").innerHTML = nailVar;
    });
})

// dropdown
function redirectToPage(url){
  if (url !==""){
    window.location.href = url;
  }
}

// Accessories

fetch("./data/accessories.json")
.then((response) => response.json())
.then((data) => {
    let accessoriesVar = "";
    data.forEach(accessories => {
        accessoriesVar += `
        <div class="product" data-aos="fade-up" data-aos-duration="3000">
               <div class="product-img">
                <img src="${accessories.image}" alt="">
              </div>

           <div class="product-detail">
             <h4>${accessories.name}</h4>
             <p>${accessories.detail}</p>
              
              <div class="price-container">
                <div>
                <span>${accessories.price}</span>
                <span class="oldPrice">${accessories.oldPrice}</span>
                </div>
                <div>
              <i class="ri-shopping-basket-2-line"></i>
              </div>
              </div>
           </div>
      </div>

        `

        document.getElementById("accessories").innerHTML = accessoriesVar;
    });
})

// Gallery Section
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("gallery-Container");
  const filterButtons = document.querySelectorAll(".filter-buttons button");

  // Fetch gallery data
  fetch("./data/gallery.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const div = document.createElement("div");
        div.className = `gallery-item ${item.category}`;
        div.innerHTML = `
          <img src="${item.image}" alt="${item.alt}" />
          <div class="overlay" data-aos="fade-up" data-aos-duration="1000">${item.overlay}</div>
        `;
        container.appendChild(div);
      });

      setupFiltering();
    })
    .catch(error => console.error("Failed to load gallery:", error));

  function setupFiltering() {
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
     
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

    
        galleryItems.forEach(item => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});