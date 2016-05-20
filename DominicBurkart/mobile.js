if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var head = document.head;
	var link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = 'mobile.css';
	head.appendChild(link);
	head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">';
}