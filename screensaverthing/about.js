function go() {
	let arr = window.location.href.split("/");
	let final = "";

	for ( let i = 0; i < arr.length; i += 1 ) {
		if ( i == arr.length - 1 && arr[i] != "about.html" ) {
			final = final.concat(arr[i]);
		} else if ( arr[i] != "about.html" ) {
			final = final.concat(arr[i]);
			final = final.concat("/");
		} else if ( arr[i] == "about.html" ) {
			final = final.concat("index.html");
		}
	}
	window.location.href = final;
}
