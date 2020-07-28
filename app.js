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
		this.classList.toggle('active');
		const child = this.nextElementSibling;
		child.style.maxHeight ? (child.style.maxHeight = null) : (child.style.maxHeight = child.scrollHeight + 'px');
	});
}
