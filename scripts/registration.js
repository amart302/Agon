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


const createAccBtn = document.querySelector(".createAccBtn");
createAccBtn.addEventListener("click", () => {
    logIn.style.left = "-400px";
    register.style.left = "50px";
    button.style.left = "110px";

    registerWindowParent.style.display = "flex";
    setTimeout(() => {
        registerWindowParent.style.opacity = 1;
    })
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

const user = document.querySelectorAll(".username");
if(sessionStorage.getItem("username")){
    user[0].innerHTML = sessionStorage.getItem("username");
    user[1].innerHTML = sessionStorage.getItem("username");
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
                user[0].innerHTML = localUsers[i].username;
                user[1].innerHTML = localUsers[i].username;
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