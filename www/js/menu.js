document.querySelector('ion-menu').addEventListener('ionWillOpen', (event) => {
	// Menu is opening
	
	document.querySelector('div.ion-page ion-content').style.pointerEvents = 'none';
})

document.querySelector('ion-menu').addEventListener('ionDidClose', (event) => {
	// Menu is closing
	
	document.querySelector('div.ion-page ion-content').style.pointerEvents = '';
})