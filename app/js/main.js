function toggleNavbarMobile() {
	let y = document.getElementById('navbar-mobile');
	let yHeight = '260px';
	if (y.style.height != yHeight) {
		y.style.height = yHeight;
	} else {
		y.style.height = '0px';
	}
}

document.addEventListener('DOMContentLoaded', function() {
	let tabs = document.getElementsByClassName('feature-tab');

	for (let i = 0; i < tabs.length; i++) {
	  tabs[i].addEventListener("click", function() {
	    let current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}
});

function openTab(n) {
	let contents = document.getElementsByClassName('features1-text');

	for (let i = 0; i < contents.length; i++) {
		if (i + 1 == n && contents[i].style.visibility == 'hidden') {
			contents[i].style.opacity = '0';
			setTimeout(function() {
				contents[i].style.visibility = 'visible';
				contents[i].style.opacity = '1';
			}, 150);
		} else if (contents[i].style.visibility == 'visible') {
			contents[i].style.opacity = '0';
			setTimeout(function() {
				contents[i].style.visibility = 'hidden';
			}, 150);
		}
	}
}

// document.onclick = function(e) {
// 	navbarMob = document.getElementById("navbar-mobile");
// 	if (navbarMob.style.height != "0px" && e.target.closest(navbarMob).length == 0) {
// 		navbarMob.style.height = "0px";
// 	}
// }