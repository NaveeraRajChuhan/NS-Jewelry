// redirect category
function openCategory(category){
  window.location.href = `products.html?category=${category}`;
}

// products data
const products = {

  Ring:[
    {
      name:'Diamond Ring',
      image:"https://zevrr.com/cdn/shop/files/Silver_ring_for_women_and_girl_silver_ring_6.webp?v=1722344969"
    //   image:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name:'Luxury Ring',
      image:"https://silverstones.pk/cdn/shop/files/14.png?v=1765906706&width=1000"
    //   image:'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop'
    }
  ],

  Necklace:[
    {
      name:'Golden Necklace',
      image:"https://thegracepk.com/cdn/shop/collections/IMG_6223.jpg?v=1709038278&width=2048"
    //   image:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name:'Pearl Necklace',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYYAr5vdZa566Qj6adGuCQ4fUcVPurIjqJA&s"
    //   image:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
    },
    {
        name:"Mini Initial Tag Necklace",
        image:"https://thegracepk.com/cdn/shop/files/il_1588xN.4158397280_65z7.webp?v=1727782593&width=1200"
    //   image:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
    },
    {
        name:"Maple Leaf Necklace",
        image:"https://yellowchimes.com/cdn/shop/files/1737693751703_2.jpg?v=1742985614&width=713"
    },
    {
        name:"short chain necklace",
        image:"https://thegracepk.com/cdn/shop/files/3-Ana-Luisa-Jewelry-Necklaces-Pendant-Necklaces-Charm-Necklace-Tallulah-Gold.webp?v=1754397814&width=1080"
    },
    {
        name:"Adjustable Cable Chain Necklace",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1pnlYRPg3FZBoM5E03BEVvV9KeVIEOceEA&s"
    },
    {
        name:"Lover Girl Necklace",
        image:"https://evryjewels.com/cdn/shop/files/Lover-Girl-Necklace.jpg?crop=center&format=webp&height=600&v=1777389743&width=600"
    },
    {
        name:"Stainless Gold Neck Chain",
        image:"https://m.media-amazon.com/images/I/310omcTKz9L.jpg"
    },
    {
        name:"Butterfly Necklace",
        image:"https://i.pinimg.com/736x/4a/25/d7/4a25d7621184338a7cf615e2bd08b3aa.jpg"
    }
  ],

  Bracelet:[
    {
      name:'Silver Bracelet',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1Ubz3x361zcYERiEVny1cza96cw5GgdQww&s"
      
    //   image:'images./bracelet3.webp'
    }
  ],


  
  Earring:[
    {
      name:'Pearl Earring',
      image:'https://www.amama.in/cdn/shop/files/DSC03879-Edit.jpg?v=1765190789&width=800'
    },
    {
        name:"Gold Twisted",
        image:'https://www.truesilver.co.in/cdn/shop/files/MSER186705A18RG-1_2.jpg?v=1766127023&width=600'
    },
    {
        name:"Flower Earring",
        image:'https://www.beautiesjewelrynyc.com/cdn/shop/files/20240322_150350.jpg?v=1730434170&width=1200'
    }
  ],

  Catcher:[
    {
      name:'Dream Catcher',
      image:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop'
    }
  ]

};

// show products page
const productContainer = document.getElementById('productContainer');

if(productContainer){

  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');

  document.getElementById('categoryTitle').innerText = category;

  const categoryProducts = products[category];

  categoryProducts.forEach(item=>{ productContainer.innerHTML += `
    <div class="col-md-4">
      <div class="product-card">
        <img src="${item.image}">
        <h3 class="mt-3">${item.name}</h3>
      </div>
    </div>
    `;

  });
}

// search functionality
const searchInput = document.getElementById('searchInput');

if(searchInput){

  searchInput.addEventListener('keyup', ()=>{

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll('.jewelry-card');

    cards.forEach(card=>{

      const text = card.innerText.toLowerCase();

      if(text.includes(value)){
        card.parentElement.style.display = 'block';
      }
      else{
        card.parentElement.style.display = 'none';
      }

    });

  });
}