const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdD_sinLKziLn0DLnFgKBbxUXzBNZH16fyEcJRSFsJsgIKK6HcNaXf-oLDAxHFm8R4g8J19z9JziiN/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

const rows = data.split(/\r?\n/).slice(1);
const container = document.querySelector(".products");

rows.forEach(row => {

if(!row.trim()) return;

/* CSV SAFE SPLIT (handles commas inside quotes) */
const cols = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

const name = cols[1]?.replace(/"/g,"");
const price = cols[2]?.replace(/"/g,"");
const image = cols[3]?.replace(/"/g,"");
const product = cols[5]?.replace(/"/g,"");
const description = cols[6]?.replace(/"/g,"");


const card = `
<div class="product">

<img src="${image}" alt="${name}">

<h3>${name}</h3>

<p class="price">₹${price}</p>

<p class="desc">${description}</p>

<a class="order"
href="https://wa.me/919860508807?text=I want to order ${name} for ₹${price}">
<span class="wa-icon">🟢</span> Order on WhatsApp
</a>

</div>
`;


container.innerHTML += card;

});

});



const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.addEventListener("click", function(e){

if(e.target.tagName === "IMG" && e.target.closest(".product")){

lightbox.style.display = "flex";
lightboxImg.src = e.target.src;

}

});

closeBtn.onclick = function(){
lightbox.style.display = "none";
};

lightbox.onclick = function(){
lightbox.style.display = "none";
};