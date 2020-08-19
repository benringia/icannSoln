const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

const initAccord = document.querySelectorAll('.accordion');
for (let i = 0; i < initAccord.length; i++) {
	initAccord[i].addEventListener('click', function() {
		this.classList.toggle('active1');
		const child = this.nextElementSibling;
		child.style.maxHeight ? (child.style.maxHeight = null) : (child.style.maxHeight = child.scrollHeight + 'px');
	});
}


// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const hamburgerBtn = document.querySelector(".sidebar-toggle")

  if (scrollHeight > 500) {
    hamburgerBtn.classList.add('act');
  } else {
    hamburgerBtn.classList.remove('act');
  }
})