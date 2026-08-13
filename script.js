let quaso = "quaso";

function docID(abajab) {
    return document.getElementById(abajab);
}
setInterval(() => {
	let separatorSpace = docID("separatorSpace").value;
	// console.log(separatorSpace);
	// console.log(quaso);
	let separator1 = docID("separator1");
	separator1.style.fontSize =  String(separatorSpace) + "px";
	let separator2 = docID("separator2");
	separator2.style.fontSize =  String(separatorSpace) + "px";
}, 30);
