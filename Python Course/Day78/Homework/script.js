// childNodes

// 1
let list = document.getElementById("myList");
console.log(list.childNodes.length);

// 2
let p = document.getElementById("myP");
p.childNodes.forEach(node => {
    console.log(node.nodeName);
});



// firstChild

// 1
let container = document.getElementById("container");
console.log(container.firstChild.nodeName);

// 2
let div = document.getElementById("myDiv");
div.firstChild.textContent = "new text content";



// lastChild

// 1
let lisst = document.getElementById("myList");
console.log(lisst.lastChild.nodeName);

// 2
let afal = document.getElementById("afal");
afal.removeChild(ul.lastChild);



// hasChildNodes

// 1
let section = document.getElementById("mySection");
if (section.hasChildNodes()){
    console.log("section has child nodes");
}

// 2
let fgadsga = document.getElementById("fgadsga");
if (fgadsga.hasChildNodes()){
    console.log("isn't empty");
} else {
    console.log("is empty");
}



//  nextSibling

// 1
let item = document.getElementById("item1");
console.log(item.nextSibling.nodeName);

// 2
let h = document.getElementById("h");
if (h.nextSibling){
    h.nextSibling.textContent = "updated text";
}



// previousSibling

// 1
let fassdf = document.getElementById("fassdf");
console.log(fassdf.previousSibling.nodeName);


// 2
let p2 = document.getElementById("p2");
if (p2.previousSibling){
    p2.previousSibling.textContent = "asfasf";
}


// parentNode

// 1
let sfgasdgf = document.getElementById("sfgasdgf");
console.log(sfgasdgf.parentNode.nodeName);

// 2
let asfjioa = document.getElementById("asfjioa");
asfjioa.parentNode.style.backgroundColor = "dark black";
