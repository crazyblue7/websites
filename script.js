let quaso = "quaso";

function docID(abajab) {
    return document.getElementById(abajab);
}
let bodyportfolio = docID("portfolio");
let body = docID("mainbody");
if (body != null) {
    setInterval(() => {
        let separatorSpace = docID("separatorSpace").value;
        console.log(separatorSpace);
        // console.log(quaso);
        let separator1 = docID("separator1");
        separator1.style.fontSize =  String(separatorSpace) + "px";
        let separator2 = docID("separator2");
        separator2.style.fontSize =  String(separatorSpace) + "px";
    }, 30);
}
if (bodyportfolio != null) {
    
    let finishedEle = docID("finished");
    let good = docID("goodMorning")
    
    let finished = false;
    setInterval(() => {
        finishedEle.hidden = finished;
        let minimumSize = 20;
        if (Number(good.style.fontSize-"px") < minimumSize) {
            good.style.fontSize = minimumSize + "px";
        } 
    }, 30);    
}
