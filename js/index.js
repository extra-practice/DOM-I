const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navBar = document.getElementsByTagName("a");
for (let i = 0; i < 6; i++) {
  navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navBar[i].style.color = "green";
}

let nav = document.querySelector("nav");
console.log(nav);
const newNavItem = document.createElement("a");
newNavItem.textContent = "Hello";
nav.prepend(newNavItem);
newNavItem.style.color = "green";

const newerNavItem = document.createElement("a");
newerNavItem.textContent = "Goodbye";
nav.appendChild(newerNavItem);
newerNavItem.style.color = "green";

const mainTitle = document.querySelector("h1");
mainTitle.textContent = siteContent["cta"]["h1"];

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

const heroImg = document.getElementById("cta-img");
heroImg.setAttribute("src", siteContent["cta"]["img-src"]);

const subtitles = document.querySelectorAll(".text-content h4");
subtitles[0].textContent = siteContent["main-content"]["features-h4"];
subtitles[1].textContent = siteContent["main-content"]["about-h4"];
subtitles[2].textContent = siteContent["main-content"]["services-h4"];
subtitles[3].textContent = siteContent["main-content"]["product-h4"];
subtitles[4].textContent = siteContent["main-content"]["vision-h4"];

const content = document.querySelectorAll(".text-content p");
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];

const lowerPhoto = document.getElementById("middle-img");
lowerPhoto.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo.forEach((el, index) => {
  let item;

  if (index === 0) item = "address";
  if (index === 1) item = "phone";
  if (index === 2) item = "email";

  el.textContent = siteContent["contact"][`${item}`];
});

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
