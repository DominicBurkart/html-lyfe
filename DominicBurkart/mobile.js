var head = document.head;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	var link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = 'http://dominicburkart.com/mobile.css';
	head.appendChild(link);
	
	head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">';
	
}
else{
	if (document.getElementById('blog') !== null){
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = 'noScroll.css';
		head.appendChild(link);
	} 
}