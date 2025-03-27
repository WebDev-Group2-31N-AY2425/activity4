document.addEventListener("DOMContentLoaded", function() {
  const menuItems = {
    Appetizers: [
      {
        name: "Calamares",
        description: "Deep-fried squid rings served with garlic mayo.",
        price: "250.00",
        img: "src/images/Menu/Appetizers/Calamares.jpg",
      },
      {
        name: "Lumpiang Shanghai",
        description:
          "Classic crispy pork spring rolls with sweet & sour sauce.",
        price: "200.00",
        img: "src/images/Menu/Appetizers/Lumpiang Shanghai.jpg",
      },
      {
        name: "Chili Cheese Sticks",
        description: "Spicy jalapeños stuffed with cheese, wrapped and fried.",
        price: "150.00",
        img: "src/images/Menu/Appetizers/Chili Cheese Sticks.jpg",
      },
    ],
    "House Specials": [
      {
        name: "Crispy Pork Binagoongan",
        description: " Crunchy pork chunks in savory shrimp paste sauce.",
        price: "180.00",
        img: "src/images/Menu/House Specials/Crispy Pork Binagoongan.jpg",
      },
      {
        name: "Laing Tinapa with Tinapa Flakes",
        description:
          "Creamy taro leaves in coconut milk, topped with smoked fish",
        price: "140.00",
        img: "src/images/Menu/House Specials/Laing With Tinapa Flakes.jpg",
      },
      {
        name: "Beef Kare-Kare with Bagoong",
        description: "Deep-fried squid rings served with garlic mayo.",
        price: "320.00",
        img: "src/images/Menu/House Specials/Beef Kare Kare with Bagoong.jpg",
      },
      {
        name: "Chicken Inasal",
        description: "Grilled, juicy chicken marinated in special spices.",
        price: "180.00",
        img: "src/images/Menu/House Specials/Chicken Inasal.jpg",
      },
      {
        name: "Crispy Pork Pata",
        description: "Deep-fried pork leg, golden and crunchy. ",
        price: "480.00",
        img: "src/images/Menu/House Specials/Crispy Pork Pata.jpg",
      },
    ],
    "Silog Meals": [
      {
        name: "Tapsilog",
        description: "Beef tapa, fried egg, garlic rice.",
        price: "180.00",
        img: "src/images/Menu/Silog Meals/Tapsilog.jpg",
      },
      {
        name: "Tocilog",
        description: " Sweet cured pork, fried egg, garlic rice.",
        price: "140.00",
        img: "src/images/Menu/Silog Meals/Tocilog.jpg",
      },
      {
        name: "Bangsilog",
        description: "Fried boneless bangus, fried egg, garlic rice.",
        price: "320.00",
        img: "src/images/Menu/Silog Meals/Bangsilog.jpg",
      },
      {
        name: "Longsilog",
        description: "Savory longganisa, fried egg, garlic rice.",
        price: "180.00",
        img: "src/images/Menu/Silog Meals/Longsilog.jpg",
      },
      {
        name: "Hotsilog",
        description: "Fried hotdog, fried egg, garlic rice. ",
        price: "480.00",
        img: "src/images/Menu/Silog Meals/Hotsilog.jpg",
      },
    ],
    "Soup and Vegetables": [
      {
        name: "Bulalo",
        description: "Beef shank soup with bone marrow, corn, and vegetables.",
        price: "420.00",
        img: "src/images/Menu/Soup & Vegetables/Bulalo.png",
      },
      {
        name: "Tinola",
        description: "Chicken soup with green papaya and malunggay",
        price: "220.00",
        img: "src/images/Menu/Soup & Vegetables/Tinola.png",
      },
      {
        name: "Sinigang na Baboy",
        description: "Tamarind-based pork soup, tangy and flavorful.",
        price: "280.00",
        img: "src/images/Menu/Soup & Vegetables/Sinigang_na_Baboy.png",
      },
      {
        name: "Chopsuey",
        description: "Stir-fried mixed vegetables with meat and seafood.",
        price: "240.00",
        img: "src/images/Menu/Soup & Vegetables/Chop Suey.png",
      },
    ],
    "For Sharing": [
      {
        name: "Crispy Boneless Pata",
        description: "A must-try crispy pork dish, juicy and crunchy.",
        price: "520.00",
        img: "src/images/Menu/For Sharing/Crispy_Boneless_Pata.png",
      },
      {
        name: "Sizzling Pork Sisig",
        description: "Classic pork sisig, served sizzling hot.",
        price: "260.00",
        img: "src/images/Menu/For Sharing/Sizzling_Pork_Sisig.png",
      },
      {
        name: "Grilled Liempo",
        description: "Smoky, tender pork belly grilled to perfection.",
        price: "230.00",
        img: "src/images/Menu/For Sharing/Grilled_Liempo.png",
      },
      {
        name: "Lechon",
        description:
          "Crispy, mahogany-skinned roasted pig, its succulent meat melting in your mouth, is the ultimate Filipino feast.",
        price: "750.00",
        img: "src/images/Menu/For Sharing/Lechon.png",
      },
    ],
    Desserts: [
      {
        name: "Leche Flan",
        description: "Smooth caramel custard dessert.",
        price: "120.00",
        img: "src/images/Menu/Desserts/Leche Flan.png",
      },
      {
        name: "Halo-Halo Special",
        description: " Shaved ice dessert with mixed sweet ingredients.",
        price: "230.00",
        img: "src/images/Menu/Desserts/Halo-Halo_Special.png",
      },
      {
        name: "Puto Bumbong",
        description:
          "Traditional purple rice cake with butter, muscovado, and coconut.",
        price: "120.00",
        img: "src/images/Menu/Desserts/Puto_Bumbong.png",
      },
    ],
    Drinks: [
      {
        name: "Sago't Gulaman",
        description: "Sweet, refreshing drink with tapioca and jelly.",
        price: "50.00",
        img: "src/images/Menu/Drinks/Sago_t_Gulaman.png",
      },
      {
        name: "Fresh Buko Juice",
        description: "Chilled coconut juice, naturally hydrating.",
        price: "60.00",
        img: "src/images/Menu/Drinks/Fresh_Buko_Juice.png",
      },
      {
        name: "Cucumber Lemonade",
        description: " Fresh and citrusy cucumber drink.",
        price: "50.00",
        img: "src/images/Menu/Drinks/Cucumber_Lemonade.png",
      },
      {
        name: "Iced Tea",
        description: "Refreshing homemade iced tea.",
        price: "45.00",
        img: "src/images/Menu/Drinks/Iced_Tea.png",
      },
      {
        name: "Softdrinks(Coke, Sprite, Royal, Pepsi)",
        description: " Classic soda choices.",
        price: "50.00",
        img: "src/images/Menu/Drinks/Soft_Drinks.png",
      },
    ],
  };

  function updateMenu(items) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML =
      "<h2 class='text-center mb-5'>Menu</h2><div class='row g-4'></div>";
    const row = menuContainer.querySelector(".row");

    items.forEach((item) => {
      const card = `
                <div class="col-md-4">
                    <div class="card h-100 menu-card">
                        <img class="card-img-top" src="${item.img}" alt="${item.name}">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>${item.price}</span>
                                <a href="#" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>`;
      row.innerHTML += card;
    });
  }

  document.querySelectorAll(".menu-nav .nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const category = this.textContent.trim();
      if (menuItems[category]) {
        updateMenu(menuItems[category]);
      }
    });
  });
});
