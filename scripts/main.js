// Create small product cards
const smallProductCards = [
    {
        id: 0,
        imgSrc: "/mainImg/smallProductCardImg1.svg",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        price: "$29.80",
    },
    {
        id: 1,
        imgSrc: "/mainImg/smallProductCardImg2.svg",
        productName: "Cancelling Headset Music Sport Deep Bass",
        price: "$420.00",
    },
    {
        id: 2,
        imgSrc: "/mainImg/smallProductCardImg3.svg",
        productName: "T500BT Original Wireless Bluetooth Headphone Deep",
        price: "$96.50",
    }
];

function createSmallProductCards(){
    for(let i = 0; i < smallProductCards.length; i++){
        const smallProductCard = document.createElement("div");
        smallProductCard.className = "smallProductCard";
        smallProductCard.id = `smallProductCard${i}`;
        smallProductCard.innerHTML = `  <img src="${smallProductCards[i].imgSrc}" alt="">
                                        <div class="smallProductCard_info">
                                            <p class="smallProductCard_productName">${smallProductCards[i].productName}</p>
                                            <p class="smallProductCard_price">${smallProductCards[i].price}</p>
                                        </div>`;
        document.querySelector(".mainBlock2").appendChild(smallProductCard);
    }
};

createSmallProductCards();

// Create product cards
const productCards = [
    {
        id: 0,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 4,
        productPrice: "$29.80"
    },
    {
        id: 1,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 3,
        productPrice: "$29.80"
    },
    {
        id: 2,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 2,
        productPrice: "$29.80"
    },
    {
        id: 3,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 5,
        productPrice: "$29.80"
    },
    {
        id: 4,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 5,
        productPrice: "$29.80"
    },
    {
        id: 5,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 5,
        productPrice: "$29.80"
    },
    {
        id: 6,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 5,
        productPrice: "$29.80"
    },
    {
        id: 7,
        imgSrc: "./mainImg/productCardImg1.png",
        brandName: "Sony",
        productName: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
        estimation: 5,
        productPrice: "$29.80"
    },
];

function createProductCard(){
    for(let i = 0; i < productCards.length; i++){
        const productCard = document.createElement("div");
        productCard.className = "productCard";
        productCard.id = `productCard${i}`;
        productCard.innerHTML = `   <img class="productCardImg" src="${productCards[i].imgSrc}" alt="">
                                    <div class="productCardMain">
                                        <p class="brandName">${productCards[i].brandName}</p>
                                        <p class="productName">${productCards[i].productName}</p>
                                        <div class="estimationBlock" id="estimationBlock${i}"></div>
                                    </div>
                                    <div class="productCardFooter">
                                        <span class="productPrice">${productCards[i].productPrice}</span>
                                        <button class="addBtn">Add +</button>
                                    </div>`;
        document.querySelector(".productCardsСontainer").appendChild(productCard);

        const estimationBlock = document.getElementById(`estimationBlock${i}`);
        console.log(productCards[i].estimation);
        for(let a = 0; a < productCards[i].estimation; a++){
            estimationBlock.innerHTML += '<img src="./mainImg/yellowStar.svg" alt="">';
        }
        for(let b = 5 - productCards[i].estimation; b > 0; b--){
            estimationBlock.innerHTML += '<img src="./mainImg/grayStar.svg" alt="">';
        }
    }
};
createProductCard()