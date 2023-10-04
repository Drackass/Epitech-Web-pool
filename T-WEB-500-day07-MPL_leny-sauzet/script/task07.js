const footer = document.querySelector('footer')
const WhiteBox = document.querySelector('footer>div')
const linkOK = document.querySelector('footer>div>a')

const newDiv = document.createElement("div");
const newBtn = document.createElement('button')
newBtn.innerHTML = "Delete the cookie"
newDiv.appendChild(newBtn)
footer.appendChild(newDiv)


newBtn.addEventListener("click",function () {
    deleteCookie("acceptsCookies")
    render()
})


linkOK.addEventListener("click",function () {
    setCookie("acceptsCookies",true,1)
    render()

})

function render() {
    if (getCookie("acceptsCookies")) {
        WhiteBox.style.display = "none"
        newDiv.style.display = "block"
    }else{
        newDiv.style.display = "none"
        WhiteBox.style.display = "block"
    }
    
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

render()