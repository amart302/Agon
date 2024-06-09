const localBasketProducts = JSON.parse(localStorage.getItem("basketProducts"));
const emptyH1 = document.querySelector(".empty");

const emptyBasketImg = document.getElementById("emptyBasketImg");
const emptyBasketH2 = document.getElementById("emptyBasketH2");
const emptyBasketSpan = document.getElementById("emptyBasketSpan");

 function removeEmptyBasket() {
    if (localBasketProducts.length > 0) {
        emptyBasketImg.style.display = "none";
        emptyBasketH2.style.display = "none";
        emptyBasketSpan.style.display = "none";
    } else {
        emptyBasketImg.style.display = "block";
        emptyBasketH2.style.display = "block";
        emptyBasketSpan.style.display = "block";
    }
}

removeEmptyBasket();

function createBasketCards() {
  if (localBasketProducts != null) {
    for (let i = 0; i < localBasketProducts.length; i++) {
        const productCard = document.createElement("div");
        productCard.className = "productCard";
        productCard.id = `productCard${i}`;
        productCard.innerHTML = `   <div class="discount" id="discount${i}">${localBasketProducts[i].discount}</div>
                                    <img class="productCardImg" src="${localBasketProducts[i].imgSrc}" alt="">
                                    <div class="productCardMain">
                                        <p class="brandName">${localBasketProducts[i].brandName}</p>
                                        <p class="productName">${localBasketProducts[i].productName}</p>
                                        <div class="estimationBlock" id="estimationBlock${i}"></div>
                                    </div>
                                    <div class="productCardFooter">
                                        <span class="productPrice">${localBasketProducts[i].productPrice}</span>
                                        <div class="quantityBlock">
                                            <div class="minsBlock" id="mins${i}"><img class="minusImg" id="mins${i}" src="./basketImg/minusImg.svg" /></div>
                                            <span id="quantity${i}">${localBasketProducts[i].quantity}</span>
                                            <div class="plusBlock" id="plus${i}"><img class="plusImg" id="plus${i}" src="./basketImg/plusImg.svg" /></div>
                                        </div>
                                        <img class="deleteImg" id="deleteImg${i}" src="./basketImg/deleteImg.svg" />
                                    </div>`;
        document.querySelector(".productCardsСontainer").appendChild(productCard);

        const discount = document.getElementById(`discount${i}`);
        if(localBasketProducts[i].discount != ""){
            discount.style.display = "flex";
        }

        const estimationBlock = document.getElementById(`estimationBlock${i}`);
        for(let a = 0; a < localBasketProducts[i].estimation; a++){
            estimationBlock.innerHTML += '<img src="./mainImg/yellowStar.svg" alt="">';
        }
        for(let b = 5 - localBasketProducts[i].estimation; b > 0; b--){
            estimationBlock.innerHTML += '<img src="./mainImg/grayStar.svg" alt="">';
        }
    }
  }
}

createBasketCards();

const productCardsСontainer = document.querySelector(".productCardsСontainer");
productCardsСontainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("plusBlock") ||
    event.target.classList.contains("plusImg")
  ) {
    const plusId = event.target.id.substring(4, 5);
    const quantity = document.getElementById(`quantity${plusId}`);
    localBasketProducts[plusId].quantity++;
    quantity.innerHTML = localBasketProducts[plusId].quantity;
    localStorage.setItem("basketProducts", JSON.stringify(localBasketProducts));
  } else if (
    event.target.classList.contains("minsBlock") ||
    event.target.classList.contains("minusImg")
  ) {
    const minsId = event.target.id.substring(4, 5);
    const quantity = document.getElementById(`quantity${minsId}`);
    if (quantity.innerHTML > 1) {
      localBasketProducts[minsId].quantity--;
      quantity.innerHTML = localBasketProducts[minsId].quantity;
      localStorage.setItem("basketProducts", JSON.stringify(localBasketProducts));
    }
  } else if (event.target.classList.contains("deleteImg")) {
    const deleteId = event.target.id.substring(9, 11);
    localBasketProducts.splice(deleteId, 1);
    localStorage.setItem("basketProducts", JSON.stringify(localBasketProducts));
    window.location.reload();
  }
});




// Registration window
const registerWindowParent = document.querySelector(".registerWindowParent");

const userBlocks = document.querySelectorAll(".user");
userBlocks.forEach(user => {
    user.addEventListener("click", () => {
        registerWindowParent.style.display = "flex";
        setTimeout(() => {
            registerWindowParent.style.opacity = 1;
        }, 200)
    });
})




const closeWindow = document.querySelector(".closeWindow");
closeWindow.addEventListener("click", () => {
    setTimeout(() => {
        registerWindowParent.style.opacity = 0;
        setTimeout(() => {
            registerWindowParent.style.display = "none";
        }, 200)
    }, 100)
})

const user = document.querySelector(".username");
if(sessionStorage.getItem("username")){
    user.innerHTML = sessionStorage.getItem("username");
};


const modal = document.getElementById("modal");
const modalButton = document.querySelector(".modal-button");

// Показать модальное окно
function showModal() {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = 1;
  }, 200)
}

// Скрыть модальное окно
function hideModal() {
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 200)
}


// Закрыть модальное окно по клику на кнопку "Закрыть"
modalButton.addEventListener("click", hideModal);

// Закрыть модальное окно по клику вне модального окна
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    hideModal();
  }
});






var logIn = document.getElementById("entranceForm");
var register = document.getElementById("registForm");
var button = document.getElementById("btn");


function registrationn() {
  logIn.style.left = "-400px";
  register.style.left = "50px";
  button.style.left = "110px";
}

function login() {
  logIn.style.left = "50px";
  register.style.left = "450px";
  button.style.left = "0";
}


const users = [];
const registUsername = document.getElementById("registUsername");
const registEmail = document.getElementById("registEmail");
const registPassword = document.getElementById("registPassword");
const registError = document.getElementById("entranceError");

function addUser() {
        const localUsers = JSON.parse(localStorage.getItem("users"));
        let userName;
        if (!localUsers) {
          const userId = users.length;
          const user = {
            id: userId + 1,
            username: registUsername.value,
            email: registEmail.value,
            password: registPassword.value,
          };
          users.push(user);
          alert(`Регистрация успешна! \n \n Имя пользователя: ${registUsername.value} \n Email: ${registEmail.value}`);
          userName = registUsername.value
          
          window.location.href = "./Main/main.html";
          sessionStorage.setItem("username", userName);

          localStorage.setItem("users", JSON.stringify(users));
          registError.innerHTML = "";
          entranceError.innerHTML = "";
          document.getElementById("registForm").reset();
          document.getElementById("entranceForm").reset();
        } else {
          const userId = localUsers.length;
          const user = {
            id: userId + 1,
            username: registUsername.value,
            email: registEmail.value,
            password: registPassword.value,
          };
          localUsers.push(user);
          alert(`Регистрация успешна! \n \n Имя пользователя: ${registUsername.value} \n Email: ${registEmail.value}`);
          userName = registUsername.value

          location.reload();
          sessionStorage.setItem("username", userName);

          localStorage.setItem("users", JSON.stringify(localUsers));
          registError.innerHTML = "";
          entranceError.innerHTML = "";
          document.getElementById("registForm").reset();
          document.getElementById("entranceForm").reset();
        }
      }
      document.getElementById("registForm").addEventListener("submit", (event) => {
          event.preventDefault();
          const localUsers = JSON.parse(localStorage.getItem("users"));
          if (!localUsers) {
            addUser();

            setTimeout(() => {
                registerWindowParent.style.opacity = 0;
                setTimeout(() => {
                    registerWindowParent.style.display = "none";
                }, 200)
            }, 800)
          } else {
            let checkUser = false;
            for (let i = 0; i < localUsers.length; i++) {
              if (localUsers[i].username == registUsername.value) {
                alert( "Имя пользователя уже используется");
                checkUser = true;
              }
            }
            if (!checkUser) {
              addUser();

              setTimeout(() => {
                registerWindowParent.style.opacity = 0;
                setTimeout(() => {
                    registerWindowParent.style.display = "none";
                }, 200)
              }, 800)
            }
          }
        });
        const entranceUsername = document.getElementById("entranceUsername");
      const entrancePassword = document.getElementById("entrancePassword");
      const entranceError = document.getElementById("entranceError");

      document.getElementById("entranceForm").addEventListener("submit", (event) => {
          event.preventDefault();

          const localUsers = JSON.parse(localStorage.getItem("users"));
          let checkUser = false;
          let userName;
          if (!localUsers) {
            alert("Пользователь не найден");
          } else {
            for (let i = 0; i < localUsers.length; i++) {
              if (
                localUsers[i].username == entranceUsername.value &&
                localUsers[i].password == entrancePassword.value
              ) {
                checkUser = true;
                userName = entranceUsername.value;
                user.innerHTML = localUsers[i].username;
                sessionStorage.setItem("username", userName);
                
              }
            }
            if (checkUser) {
            sessionStorage.setItem("username", userName);

            alert("Успешный вход");

            sessionStorage.setItem("entrance", true);
            entranceError.innerHTML = "";
            registError.innerHTML = "";
            document.getElementById("entranceForm").reset();
            document.getElementById("registForm").reset();

            setTimeout(() => {
                registerWindowParent.style.opacity = 0;
                setTimeout(() => {
                    registerWindowParent.style.display = "none";
                }, 200)
              }, 200)
          } else {
            showModal()
          }
          }
        });