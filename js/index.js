function onInit() {
  // console.log("ready");
  renderSectors();
  renderCarousle();
  renderCarousle2();
  startCarousle1();
  startCarousle2();
  starsColorFill();
  setInterval(starsColorFill, 10000);
}

var sectors = [
  {
    name: "סמארטפונים",
  },
  {
    name: "אביזרים",
  },
  {
    name: "מחשבים",
  },
  {
    name: "מעבדת תיקונים",
  },
];

var carousleItems = [
  {
    img: "./images/m1.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m2.jpg",
    title: "אביזרים",
    text: "אביזרים חדשים ומשופרים",
  },
  {
    img: "./images/m3.jpg",
    title: "מחשבים",
    text: "מחשבים חדשים ומשופרים",
  },
  {
    img: "./images/m4.jpg",
    title: "מעבדת תיקונים",
    text: "מעבדת תיקונים חדשה ומשופרת",
  },
  {
    img: "./images/m5.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m6.jpg",
    title: "אביזרים",
    text: "אביזרים חדשים ומשופרים",
  },
  {
    img: "./images/m7.jpg",
    title: "מחשבים",
    text: "מחשבים חדשים ומשופרים",
  },
  {
    img: "./images/m8.jpg",
    title: "מעבדת תיקונים",
    text: "מעבדת תיקונים חדשה ומשופרת",
  },
  {
    img: "./images/m9.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m10.jpg",
    title: "אביזרים",
    text: "אביזרים חדשים ומשופרים",
  },
];

var carousleItems2 = [
  {
    img: "./images/m1-1.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m2-1.jpg",
    title: "אביזרים",
    text: "אביזרים חדשים ומשופרים",
  },
  {
    img: "./images/m3-1.jpg",
    title: "מחשבים",
    text: "מחשבים חדשים ומשופרים",
  },
  {
    img: "./images/m4-1.jpg",
    title: "מעבדת תיקונים",
    text: "מעבדת תיקונים חדשה ומשופרת",
  },
  {
    img: "./images/m5-1.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m6-1.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m7-1.jpg",
    title: "מחשבים",
    text: "מחשבים חדשים ומשופרים",
  },
  {
    img: "./images/m8-1.jpg",
    title: "מעבדת תיקונים",
    text: "מעבדת תיקונים חדשה ומשופרת",
  },
  {
    img: "./images/m9-1.jpg",
    title: "סמארטפונים",
    text: "סמארטפונים חדשים ומשופרים",
  },
  {
    img: "./images/m10-1.jpg",
    title: "אביזרים",
    text: "אביזרים חדשים ומשופרים",
  },
];

var eSector = document.querySelector(".sectors");
var eCarousle = document.querySelector(".carousleIN");
var eCarousle2 = document.querySelector(".carousleIN2");
var eDotDiv = document.querySelector(".dotDiv");
var eDotDiv2 = document.querySelector(".dotDiv2");
var eStarIcon = document.querySelectorAll(".starIcon");
var currCarousleItem1 = 0;
var currCarousleItem2 = 0;

function renderSectors() {
  var html = "";
  var margin = "";
  for (let i = 0; i < sectors.length; i++) {
    if (i === 0) margin = "ms-1";
    else if (i === sectors.length - 1) margin = "me-1";
    html += `<p class="sectorItem col-xs-5 col-lg-2 text-center fw-bolder m-0 ${margin}">${sectors[i].name}</p>`;
    if (i !== sectors.length - 1) {
      html += `<div class="sectorItemH col-1 text-center fw-bolder">|</div>`;
    }
  }
  eSector.innerHTML = html;
}

function renderCarousle(currItem = 0) {
  var html = "";
  eDotDiv.innerHTML = "";
  document
    .querySelectorAll(".dot")
    .forEach((e) => e.classList.remove("active"));
  currCarousleItem1 = currItem;
  if (window.innerWidth < 776) {
    html += `<div class="carousleItem col-12 text-center">
    <img src="${carousleItems[currCarousleItem1].img}" 
    class="carousleImg col-12 rounded"
    alt="${carousleItems[currCarousleItem1].title}"
     />
    <h1 class="carousleTitle text-light">${carousleItems[currCarousleItem1].title}</h1>
    <p class="carousleText text-light">${carousleItems[currCarousleItem1].text}</p>
    </div>
    `;
    for (let i = 0; i < carousleItems.length; i++) {
      eDotDiv.innerHTML += `<span class="dot" onclick="renderCarousle(${i})"></span>`;
    }
    document
      .querySelectorAll(".dot")
      [currCarousleItem1].classList.add("active");
  } else {
    for (let i = currCarousleItem1; i <= currCarousleItem1 + 1; i++) {
      html += `<div class="carousleItem col-6 text-center">
    <img src="${carousleItems[i].img}" class="carousleImg col-12 rounded"
    alt="${carousleItems[i].title}"
     />
    <h1 class="carousleTitle text-light">${carousleItems[i].title}</h1>
    <p class="carousleText text-light">${carousleItems[i].text}</p>
    </div>
    `;
    }
    for (let i = 0; i < carousleItems.length; i += 2) {
      eDotDiv.innerHTML += `<span class="dot" onclick="renderCarousle(${i})"></span>`;
    }
    document
      .querySelectorAll(".dot")
      [currCarousleItem1 / 2].classList.add("active");
  }
  eCarousle.innerHTML = html;
}

function nextCarousleItem() {
  if (window.innerWidth > 776) {
    currCarousleItem1 += 2;
    if (currCarousleItem1 === carousleItems.length) currCarousleItem1 = 0;
  } else {
    currCarousleItem1++;
    if (currCarousleItem1 === carousleItems.length) currCarousleItem1 = 0;
  }
  renderCarousle(currCarousleItem1);
}

function renderCarousle2(currItem2 = 0) {
  var html = "";
  eDotDiv2.innerHTML = "";
  currCarousleItem2 = currItem2;
  if (window.innerWidth < 776) {
    html += `<div class="carousleItem col-12 text-center">
    <img src="${carousleItems2[currCarousleItem2].img}"
    alt="${carousleItems2[currCarousleItem2].title}"
    class="carousleImg col-12 rounded" />
    <h1 class="carousleTitle text-light">${carousleItems2[currCarousleItem2].title}</h1>
    <p class="carousleText text-light">${carousleItems2[currCarousleItem2].text}</p>
    </div>
    `;
    for (let i = 0; i < carousleItems2.length; i++) {
      eDotDiv2.innerHTML += `<span class="dot2" onclick="renderCarousle2(${i})"></span>`;
    }
    document
      .querySelectorAll(".dot2")
      [currCarousleItem2].classList.add("active");
  } else {
    for (let i = currCarousleItem2; i <= currCarousleItem2 + 1; i++) {
      html += `<div class="carousleItem col-6 text-center">
    <img src="${carousleItems2[i].img}"
    alt="${carousleItems2[i].title}"
    class="carousleImg col-12 rounded" />
    <h1 class="carousleTitle text-light">${carousleItems2[i].title}</h1>
    <p class="carousleText text-light">${carousleItems2[i].text}</p>
    </div>
    `;
    }
    for (let i = 0; i < carousleItems2.length; i += 2) {
      eDotDiv2.innerHTML += `<span class="dot2" onclick="renderCarousle2(${i})"></span>`;
    }
    document
      .querySelectorAll(".dot2")
      [currCarousleItem2 / 2].classList.add("active2");
  }
  eCarousle2.innerHTML = html;
}

function nextCarousleItem2() {
  if (window.innerWidth > 776) {
    currCarousleItem2 += 2;
    if (currCarousleItem2 === carousleItems2.length) currCarousleItem2 = 0;
  } else {
    currCarousleItem2++;
    if (currCarousleItem2 === carousleItems2.length) currCarousleItem2 = 0;
  }
  renderCarousle2(currCarousleItem2);
}

function startCarousle1() {
  carousleInterval = setInterval(nextCarousleItem, 5000);
}

function startCarousle2() {
  carousleInterval2 = setInterval(nextCarousleItem2, 5000);
}

function stopCarousle1() {
  clearInterval(carousleInterval);
}

function stopCarousle2() {
  clearInterval(carousleInterval2);
}

function starsColorFill() {
  for (let i = 0; i < eStarIcon.length; i++) {
    setTimeout(() => {
      eStarIcon[i].classList.replace("bi-star", "bi-star-fill");
      eStarIcon[i].classList.add("text-warning");
    }, 1000 * i);
  }

  for (let i = 0; i < eStarIcon.length; i++) {
    eStarIcon[i].classList.replace("bi-star-fill", "bi-star");
    eStarIcon[i].classList.remove("text-warning");
  }
}

function sendWhatsappMsg() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;
  var statusAlert = document.querySelector(".statusAlert");
  if (name !== "" || email !== "" || message !== "" || phone !== "") {
    var url =
      "https://api.whatsapp.com/send?phone=+972524069659&text=שלום זה " +
      name +
      " שולח לך הודעה מדף הנחיתה%0Aהאימיל שלי הוא " +
      email +
      "%0Aמס' טלפון - " +
      phone +
      "%0Aאני צריך " +
      message;
    statusAlert.classList.replace("alert-danger", "alert-success");
    statusAlert.classList.replace("d-none", "d-block");
    statusAlert.innerHTML = "ההודעה נשלחה בהצלחה";
    setTimeout(() => {
      statusAlert.classList.replace("d-block", "d-none");
      name = "";
      email = "";
      phone = "";
      message = "";
    }, 2000);
    window.open(url, "_blank");
  } else {
    statusAlert.classList.replace("alert-success", "alert-danger");
    statusAlert.classList.replace("d-none", "d-block");
    statusAlert.innerHTML = "אנא מלא את כל השדות";
    setTimeout(() => {
      statusAlert.classList.replace("d-block", "d-none");
    }, 2000);
  }
}

// function callToPhone() {
//   var url = "tel:0524069659";
//   window.open(url, "_blank");
// }

function shareToFacebook() {
  var url =
    "https://www.facebook.com/sharer/sharer.php?u=https://www.galaxy.co.il/";
  window.open(url, "_blank");
}

function shareToWhatsapp() {
  var url = "https://api.whatsapp.com/send?text=https://www.galaxy.co.il/";
  window.open(url, "_blank");
}

function shareToMail() {
  var url = "mailto:?subject=Galaxy S23&body=https://www.galaxy.co.il/";
  window.open(url, "_blank");
}

function shareToSms() {
  var url = "sms:?body=https://www.galaxy.co.il/";
  window.open(url, "_blank");
}
