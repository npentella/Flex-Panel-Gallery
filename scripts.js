const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	this.classList.toggle('open')
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen))
panels.forEach(panel => panel.addEventListener("transitionend", handleTransitionend))