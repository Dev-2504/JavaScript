let search_cross = document.getElementById("search_cross");
let search_input = document.getElementById("search_input");

let add_to_cart; 

// Search Bar Cross Icon
const show = () => {
  // console.log(search_input.value.length)
  if (search_input.value.length >= 1) {
    search_cross.style.visibility = "visible";
    search_cross.style.opacity = "100%";
  } else {
    search_cross.style.visibility = "hidden";
    search_cross.style.opacity = "0";
  }
};

const cross = () => {
  search_input.value = "";
  search_cross.style.visibility = "hidden";
  search_cross.style.opacity = "0";
};





// Men Click Function

const Men = () => {
    Content.innerHTML = ""
    let  men = api.filter((element) => {
        return element.gender == "Men"
    })
    men.forEach((element) => {
        makeElement(element)
    })
    add_to_cart_fun() 
    // console.log(men)
}

// Women Click Functinon
const Women = () => {
    Content.innerHTML = ""
    let  women = api.filter((element) => {
        return element.gender == "Women"
    })
    women.forEach((element) => {
        makeElement(element)
    })
    add_to_cart_fun() 
    // console.log(men)
}

// Data
let api = [
  {
    id: 0,
    brand: "Bewakoof",
    gender: "Men",
    categories: "T-Shirts",
    title: "Men's Black Batman Outline Logo Graphic Printed Oversized T-shirt",
    offer_price: 699,
    price: 1299,
    rating: 4.4,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/men-s-black-batman-outline-logo-graphic-printed-oversized-t-shirt-519159-1734686072-1.jpg",
  },
  {
    id: 1,
    brand: "Bewakoof",
    gender: "Men",
    categories: "Shirts",
    title: "Men's Rust Orange Checked Oversized Shirt",
    offer_price: 1499,
    price: 2499,
    rating: 4.6,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/men-s-rust-orange-checked-oversized-shirt-646373-1734610461-1.jpg",
  },
  {
    id: 2,
    brand: "Bewakoof",
    gender: "Men",
    categories: "T-Shirts",
    title: "Men's White Better & Better Graphic Printed Oversized T-shirt",
    offer_price: 599,
    price: 1299,
    rating: 4.5,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/men-s-white-better-better-graphic-printed-oversized-t-shirt-629620-1736761552-1.jpg",
  },
  {
    id: 3,
    brand: "Bewakoof",
    gender: "Men",
    categories: "Shirts",
    title: "Men's White & Blue Tie & Dye Oversized Shirt",
    offer_price: 449,
    price: 1599,
    rating: 4.6,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/men-s-white-blue-tie-dye-oversized-shirt-586224-1722596876-1.jpg",
  },
  {
    id: 4,
    brand: "Bewakoof",
    gender: "Women",
    categories: "T-Shirts",
    title: "Women's Blue Stardust Soul Graphic Printed Oversized T-shirt",
    offer_price: 599,
    price: 1499,
    rating: 4.7,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-blue-stardust-soul-graphic-printed-oversized-t-shirt-580622-1741326025-1.jpg",
  },
  {
    id: 5,
    brand: "Bewakoof",
    gender: "Women",
    categories: "Shirts",
    title: "Women's Light Olive Green Oversized Crop Shirt",
    offer_price: 499,
    price: 1899,
    rating: 4.5,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-light-olive-green-oversized-crop-shirt-633883-1745393640-1.jpg",
  },
  {
    id: 6,
    brand: "Bewakoof",
    gender: "Women",
    categories: "T-Shirts",
    title: "Women's Blue Inner Peace Graphic Printed Boyfriend T-shirt",
    offer_price: 399,
    price: 999,
    rating: 4.7,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-blue-inner-peace-graphic-printed-boyfriend-t-shirt-295707-1745902558-1.jpg",
  },
  {
    id: 7,
    brand: "Oxolloxo",
    gender: "Women",
    categories: "Shirts",
    title: "Women's Off White All Over Printed Shirt",
    offer_price: 1199,
    price: 1999,
    rating: 4.5,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-off-white-all-over-printed-shirt-671317-1744025214-1.jpg",
  },
  {
    id: 8,
    brand: "Bewakoof Air 1.0",
    gender: "Women",
    categories: "Joggers",
    title: "Women's Grey Oversized Joggers",
    offer_price: 899,
    price: 2049,
    rating: 4.4,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-grey-oversized-joggers-624641-1743589266-1.jpg",
  },
  {
    id: 9,
    brand: "Bewakoof",
    gender: "Women",
    categories: "Joggers",
    title: "Women's Green Oversized Joggers",
    offer_price: 999,
    price: 2699,
    rating: 4.6,
    add_to_cart: false,
    image:
      "https://images.bewakoof.com/t1080/women-s-green-oversized-cargo-joggers-649932-1743757429-1.jpg",
  },
];


let Content = document.getElementById("Content");
let add_to_cart_create;
let add_to_cart_id;

// Make Element Function
function makeElement(element) {
  // console.log("Index : " + index)
  // Card Div
  let card = document.createElement("div");
  card.classList.add("Card");
  //   card.setAttribute("id",element.id)
  card = Content.appendChild(card);
  //   console.log(card)

  // Card Image
  let card_img = document.createElement("div");
  card_img.classList.add("card_img");
  let aa = (card_img.style.backgroundImage = `url(${element.image})`);
  //   console.log(aa);
  card_img = card.appendChild(card_img);
  //   console.log(card_img);

  // Card Content
  let card_content = document.createElement("div");
  card_content.classList.add("card_content");
  card_content = card.appendChild(card_content);
  // console.log(card_content)

  // Card Brand Name
  let card_title = document.createElement("p");
  card_title.innerText = element.brand;
  card_title.classList.add("card_title");
  card_title = card_content.appendChild(card_title);
  // console.log(card_title)

  let card_span = document.createElement("span");
  card_span = card_content.appendChild(card_title);
  // console.log(card_title)

  add_to_cart_create = document.createElement("img");
  add_to_cart_create.classList.add("add_to_card_image");
  let a = add_to_cart_create.setAttribute("data-id", element.id);
  //   console.log(a)
  if (element.add_to_cart == true) {
    add_to_cart_create.setAttribute("src", "./Icon/ion--bag.svg");
  } else {
    add_to_cart_create.setAttribute("src", "./Icon/ion--bag-outline.svg");
  }
  //   showadd(element);
  add_to_cart = card_span.appendChild(add_to_cart_create);
  //   console.log(add_to_cart)

  // Card Description
  let card_des = document.createElement("p");
  if (element.title.length <= 40) {
    card_des.innerText = element.title;
  } else {
    let a = "";
    for (let i = 0; i <= 39; i++) {
      a = a + element.title[i];
    }
    card_des.innerText = a + "...";
  }
  card_des.classList.add("card_des");
  //   console.log(card_des);
  card_des = card_content.appendChild(card_des);

  // Card Price
  let card_price = document.createElement("p");
  card_price.classList.add("card_price");
  card_price = card_content.appendChild(card_price);

  let card_act_price = document.createElement("span");
  card_act_price.classList.add("card_Act_price");
  card_act_price.innerText = `₹${element.offer_price}`;
  card_act_price = card_price.appendChild(card_act_price);

  let card_price_des = document.createElement("del");
  card_price_des.classList.add("card_price_des");
  card_price_des.innerText = `₹${element.price}`;
  card_price_des = card_price.appendChild(card_price_des);

  let card_price_per = document.createElement("span");
  card_price_per.classList.add("card_price_per");
  let discount = Math.floor(
    ((element.price - element.offer_price) / element.price) * 100
  );
  card_price_per.innerText = `${discount}%OFF`;
  card_price_per = card_price.appendChild(card_price_per);

  //   add_to_cart_fun()
}

// All Data Function
function allData() {
  Content.innerHTML = "";
  api.forEach((e) => {
    makeElement(e);
  });
  add_to_cart_fun() 
}
allData();

// Add To Cart Function
let add_to_cart_arr = [];

function add_cart() {
    
    if(add_to_cart_arr.length <= 0)
    {
        console.log("Add To Cart Is Empty")
        Content.innerHTML = "";
        let make = document.createElement("h1")
        make.innerText = "Add To Cart Is Empty"
        Content.appendChild(make)
    }
    else {
        Content.innerHTML = ""
        add_to_cart_arr.forEach((e) => {
            makeElement(e);
        });
    }
    add_to_cart_fun();
    cart_icon()
}

// Add To Cart Event
function add_to_cart_fun() {
  let add_to_cart_icon = document.querySelectorAll(".add_to_card_image");
  add_to_cart_icon.forEach((e, i) => {
    let a = e.getAttribute("data-id");
    e.addEventListener("click", () => {


      if (api[a].add_to_cart == true) {
        e.setAttribute("src", "./Icon/ion--bag-outline.svg");
        let c = api[a].add_to_cart = false;
        console.log("c : " + c)
        console.log("True")
        let index = add_to_cart_arr.findIndex((e, i) => {
          return a == e.id;
        });
        console.log(api[a])
        console.log("False")
        add_to_cart_arr.splice(index, 1);


      } else {
        e.setAttribute("src", "./Icon/ion--bag.svg");
        api[a].add_to_cart = true;
        console.log("False")
        let index = api.findIndex((e, i) => {
          return a == e.id;
        });
        console.log(api[a])
        add_to_cart_arr.push(api[index]);
        console.log("True")
      }
    });
  });
}


let img_true = true

function cart_icon()
{
    let add_to_icon_main = document.getElementById("icon_main")
    console.log(add_to_icon_main)

if(img_true){
    add_to_icon_main.setAttribute("src","./Icon/oui--cross (1).svg")
    img_true = false
}
else {
    add_to_icon_main.setAttribute("src","./Icon/add_to_cart.svg")
    img_true = true
    allData()
}
}