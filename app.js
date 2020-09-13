// Selecting items
// modal links and modal
const copyItem = document.querySelector('.my-copyGrid');
const modal = document.querySelector('.modal');
// section links
// const copySectionLink = document.querySelector('.my-copySectionlink')


// event listener
copyItem.addEventListener('click', showModal);
// copySectionLink.addEventListener('click', goToSection);

// function
function showModal(e){
    if (e.target.parentElement.classList.contains('my-copyItem')){
        modal.classList.add('active')
    }
}

// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

// (function() {
// 	scrollTo();
// })();

// function scrollTo() {
//     // section links
//     const copySectionLink = document.querySelector('.my-copySectionlink')
// 	// const links = document.querySelectorAll('.scroll');
// 	copySectionLink.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
// 	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
// 	e.preventDefault();
// 	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
// 	const targetAnchor = document.querySelector(targetID);
// 	if (!targetAnchor) return;
// 	const originalTop = distanceToTop(targetAnchor);
// 	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
// 	const checkIfDone = setInterval(function() {
// 		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
// 		if (distanceToTop(targetAnchor) === 0 || atBottom) {
// 			targetAnchor.tabIndex = '-1';
// 			targetAnchor.focus();
// 			window.history.pushState('', '', targetID);
// 			clearInterval(checkIfDone);
// 		}
// 	}, 100);
// }