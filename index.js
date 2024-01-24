var splide = new Splide(".splide", {
  type: "loop",
  gap: 20,
  perPage: 5,
});

const tabsList = [
  {
    id: 1,
    tabName: "SYRUPS",
  },
  {
    id: 2,
    tabName: "JAMS & SPREADS",
  },
  {
    id: 3,
    tabName: "FRUIT CHEWS",
  },
  {
    id: 4,
    tabName: "SNACKS",
  },
  {
    id: 5,
    tabName: "CHOCOLATES",
  },
];

const obj = {
  SYRUPS: [
    {
      id: 1,
      category: "SYRUPS",
      image: "images/syrups/image 1.png",
      company: "Mapro",
      productType: "Crush",
      price: [360],
      productName: "Whole Strawberry Crush",
      rating: 5.0,
      productQuantitiesAvailable: ["1000ml", "750ml"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 2,
      category: "SYRUPS",
      image: "images/syrups/image 2.png",
      company: "Mapro",
      productType: "Sharbat",
      price: [252, 180],
      productName: "Rose Sharbat",
      rating: 5.0,
      productQuantitiesAvailable: ["1000ml", "750ml"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 3,
      category: "SYRUPS",
      image: "images/syrups/image 3.png",
      company: "Mapro",
      productType: "Crush",
      price: [252, 180],
      productName: "Strawberry Crush",
      rating: 5.0,
      productQuantitiesAvailable: ["1000ml", "750ml"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 4,
      category: "SYRUPS",
      image: "images/syrups/image 4.png",
      company: "Pra",
      productType: "Sharbat",
      price: [450],
      productName: "Kesar Sharbat",
      rating: 5.0,
      productQuantitiesAvailable: ["500ml"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 5,
      category: "SYRUPS",
      image: "images/syrups/image 5.png",
      company: "Mapro",
      productType: "Crush",
      price: [360, 270],
      productName: "Alphonso Mango Crush",
      rating: 5.0,
      productQuantitiesAvailable: ["1000ml", "750ml"],
      buttonText: "ADD TO BAG",
    },
  ],
  "JAMS & SPREADS": [
    {
      id: 1,
      category: "JAMS & SPREADS",
      image: "images/Jams & Spreads/image 1.png",
      company: "Mapro",
      productType: "Jam",
      price: [297, 144, 72],
      productName: "Whole Strawberry Jam",
      rating: 5.0,
      productQuantitiesAvailable: ["1kg", "500gm", "200gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 2,
      category: "JAMS & SPREADS",
      image: "images/Jams & Spreads/image 2.png",
      company: "Mapro",
      productType: "Jam",
      price: [234, 144, 72],
      productName: "Mixed Fruit Jam",
      rating: 5.0,
      productQuantitiesAvailable: ["1kg", "500gm", "200gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 3,
      category: "JAMS & SPREADS",
      image: "images/Jams & Spreads/image 3.png",
      company: "Mapro",
      productType: "Chocolate Spread",
      price: [270],
      productName: "Chocolate Spread with Choco Chips",
      rating: 5.0,
      productQuantitiesAvailable: ["300gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 4,
      category: "JAMS & SPREADS",
      image: "images/Jams & Spreads/image 4.png",
      company: "Mapro",
      productType: "Jam",
      price: [270, 144, 72],
      productName: "Pineapple Jam",
      rating: 5.0,
      productQuantitiesAvailable: ["300gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 5,
      category: "JAMS & SPREADS",
      image: "images/Jams & Spreads/image 5.png",
      company: "Mapro",
      productType: "Jam",
      price: [270, 144, 72],
      productName: "Orange Marmalade",
      rating: 5.0,
      productQuantitiesAvailable: ["300gm"],
      buttonText: "ADD TO BAG",
    },
  ],
  "FRUIT CHEWS": [
    {
      id: 1,
      category: "FRUIT CHEWS",
      image: "images/Fruit Chews/image 1.png",
      company: "Falero",
      productType: "Fruit Chews",
      price: [117],
      productName: "Strawberry",
      rating: 5.0,
      productQuantitiesAvailable: ["175gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 2,
      category: "FRUIT CHEWS",
      image: "images/Fruit Chews/image 2.png",
      company: "Falero",
      productType: "Fruit Chews",
      price: [240],
      productName: "Fruba Guava",
      rating: 5.0,
      productQuantitiesAvailable: ["360gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 3,
      category: "FRUIT CHEWS",
      image: "images/Fruit Chews/image 3.png",
      company: "Falero",
      productType: "Fruit Chews",
      price: [240],
      productName: "J-POP",
      rating: 5.0,
      productQuantitiesAvailable: ["336gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 4,
      category: "FRUIT CHEWS",
      image: "images/Fruit Chews/image 4.png",
      company: "Falero",
      productType: "Fruit Chews",
      price: [117],
      productName: "Qubes",
      rating: 5.0,
      productQuantitiesAvailable: ["250gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 5,
      category: "FRUIT CHEWS",
      image: "images/Fruit Chews/image 5.png",
      company: "Falero",
      productType: "Fruit Chews",
      price: [270, 144, 72],
      productName: "Falchoos",
      rating: 5.0,
      productQuantitiesAvailable: ["300gm"],
      buttonText: "ADD TO BAG",
    },
  ],
  SNACKS: [
    {
      id: 1,
      category: "SNACKS",
      image: "images/Snaks/image 1.png",
      company: "Whitty",
      productType: "Khakhra",
      price: [225, 144],
      productName: "Cheese Masti Khakhra",
      rating: 5.0,
      productQuantitiesAvailable: ["450gm", "300gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 2,
      category: "SNACKS",
      image: "images/Snaks/image 2.png",
      company: "Whitty",
      productType: "Khakhra",
      price: [225, 144],
      productName: "Methi Khakhra",
      rating: 5.0,
      productQuantitiesAvailable: ["450gm", "300gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 3,
      category: "SNACKS",
      image: "images/Snaks/image 3.png",
      company: "Whitty",
      productType: "Khakhra",
      price: [225, 144],
      productName: "Tomato Masti Khakhra",
      rating: 5.0,
      productQuantitiesAvailable: ["450gm", "300gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 4,
      category: "SNACKS",
      image: "images/Snaks/image 4.png",
      company: "Whitty",
      productType: "Khakhra",
      price: [225, 144],
      productName: "Noodle Masala Khakhra",
      rating: 5.0,
      productQuantitiesAvailable: ["450gm", "300gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 5,
      category: "SNACKS",
      image: "images/Snaks/image 5.png",
      company: "Whitty",
      productType: "Khakhra",
      price: [225, 144],
      productName: "Pure Ghee Khakhra",
      rating: 5.0,
      productQuantitiesAvailable: ["450gm", "300gm"],
      buttonText: "ADD TO BAG",
    },
  ],
  CHOCOLATES: [
    {
      id: 1,
      category: "CHOCOLATES",
      image: "images/Chocolates/image 1.png",
      company: "Mazaana",
      productType: "Chocolate",
      price: [144],
      productName: "Chocolate Almond Dates",
      rating: 5.0,
      productQuantitiesAvailable: ["100gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 2,
      category: "CHOCOLATES",
      image: "images/Chocolates/image 2.png",
      company: "Mazaana",
      productType: "Chocolate",
      price: [144],
      productName: "Chocolate Pan",
      rating: 5.0,
      productQuantitiesAvailable: ["80gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 3,
      category: "CHOCOLATES",
      image: "images/Chocolates/image 3.png",
      company: "Mazaana",
      productType: "Chocolate",
      price: [180],
      productName: "Whole Cashews Coated with Fine Dark Chocolate",
      rating: 5.0,
      productQuantitiesAvailable: ["100gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 4,
      category: "CHOCOLATES",
      image: "images/Chocolates/image 4.png",
      company: "Mazaana",
      productType: "Chocolate",
      price: [180],
      productName: "Whole Almonds Coated with Fine Dark Chocolate",
      rating: 5.0,
      productQuantitiesAvailable: ["100gm"],
      buttonText: "ADD TO BAG",
    },
    {
      id: 5,
      category: "CHOCOLATES",
      image: "images/Chocolates/image 5.png",
      company: "Mazaana",
      productType: "Chocolate",
      price: [180],
      productName: "Whole Almonds Coated with Fine Milk Chocolate",
      rating: 5.0,
      productQuantitiesAvailable: ["100gm"],
      buttonText: "ADD TO BAG",
    },
  ],
};

const tabsSectionEL = document.querySelector(".tabs-section");

function selectedTab(event) {
  const nodeList = document.querySelectorAll(".tab");
  nodeList.forEach((each) => each.classList.remove("active"));
  event.target.classList.add("active");
  renderProducts(obj[event.target.textContent]);
}

function createAndAppendTab() {
  tabsList.forEach((eachTabObj) => {
    const className = eachTabObj.tabName === "SYRUPS" ? "active" : "not-active";
    let tabEl = document.createElement("button");
    tabEl.textContent = eachTabObj.tabName;

    tabEl.classList.add("tab", className);
    tabEl.addEventListener("click", (event) => selectedTab(event, eachTabObj));
    tabsSectionEL.appendChild(tabEl);
  });
}

createAndAppendTab();

function renderDropDown(container, list) {
  list.forEach((each) => {
    const productWeightEl = document.createElement("option");
    productWeightEl.textContent = each;
    productWeightEl.value = each;
    productWeightEl.classList.add("product-weight");
    container.appendChild(productWeightEl);
  });
}

function stars(container) {
  let starsCount = 5;
  for (let i = 0; i < starsCount; i++) {
    const starEl = document.createElement("i");
    starEl.style.color = "green";
    starEl.classList.add("fa-solid", "fa-star", "star");
    container.appendChild(starEl);
  }
  return;
}

function renderProducts(categoryList) {
  const splideListEl = document.querySelector(".splide__list");
  // Update splideListEl reference
  splideListEl.textContent = "";
  console.log(categoryList);
  categoryList.forEach((eachProduct) => {
    // Destroy splide
    splide.destroy();
    const productCard = document.createElement("li");
    productCard.classList.add("splide__slide", "product-card-item");
    splideListEl.appendChild(productCard);

    const imgEl = document.createElement("img");
    imgEl.src = eachProduct.image;
    productCard.appendChild(imgEl);

    const productDetailsContainer = document.createElement("div");
    productDetailsContainer.classList.add("products-details-container");
    productCard.appendChild(productDetailsContainer);

    const firstContainer = document.createElement("div");
    firstContainer.classList.add("first-container");
    productDetailsContainer.appendChild(firstContainer);

    const companyNameContainer = document.createElement("div");
    companyNameContainer.classList.add("company-name-container");
    firstContainer.appendChild(companyNameContainer);

    const companyName = document.createElement("h3");
    companyName.textContent = eachProduct.company;
    companyName.classList.add("company-name");
    companyNameContainer.appendChild(companyName);

    const productType = document.createElement("li");
    productType.textContent = eachProduct.productType;
    productType.classList.add("product-type");
    companyNameContainer.appendChild(productType);

    const productPrice = document.createElement("p");
    productPrice.textContent = "₹" + eachProduct.price[0];
    productPrice.classList.add("product-price");
    firstContainer.appendChild(productPrice);

    const secondContainer = document.createElement("div");
    secondContainer.classList.add("second-container");
    productDetailsContainer.appendChild(secondContainer);

    const productName = document.createElement("h2");
    productName.textContent = eachProduct.productName;
    productName.classList.add("product-name");
    secondContainer.appendChild(productName);

    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars-container");
    secondContainer.appendChild(starsContainer);
    stars(starsContainer);

    const weightDropDownEl = document.createElement("select");
    weightDropDownEl.classList.add("weight-dropdown");
    secondContainer.appendChild(weightDropDownEl);

    renderDropDown(weightDropDownEl, eachProduct.productQuantitiesAvailable);

    const addToBagButtonEl = document.createElement("button");
    addToBagButtonEl.textContent = "ADD TO BAG";
    addToBagButtonEl.classList.add("add-to-bag-button");
    productDetailsContainer.appendChild(addToBagButtonEl);
    // mount splide
    splide.mount();
  });
}

renderProducts(obj.SYRUPS);
