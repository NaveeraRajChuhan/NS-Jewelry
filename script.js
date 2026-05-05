// redirect category
function openCategory(category){
  window.location.href = `products.html?category=${category}`;
}

// products data
const products = {

  Ring:[
    {
      name:'Diamond Ring',
      image:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name:'Luxury Ring',
      image:'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop'
    }
  ],

  Necklace:[
    {
      name:'Golden Necklace',
      image:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
    }
  ],

  Bracelet:[
    {
      name:'Silver Bracelet',
      image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop'
    }
  ],

  Earring:[
    {
      name:'Pearl Earring',
      image:'https://images.unsplash.com/photo-1635767798638-3665c7a0c0c5?q=80&w=1200&auto=format&fit=crop'
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

  categoryProducts.forEach(item=>{