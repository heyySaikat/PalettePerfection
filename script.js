const colors= {
    1:"#00BFFF",
    2:"#DC143C",
    3:"#32CD32",
    4:"#DAA520",
    5:"#9932CC"
};

let c1 = Math.ceil(Math.random() * 5) 

console.log(document.body.getElementsByClassName("container")[0].childNodes[1].style.background=`${colors[c1]}`)

let c2 = Math.ceil(Math.random() * 5) 

document.body.getElementsByClassName("container")[0].childNodes[3].style.background=`${colors[c2]}`

let c3 = Math.ceil(Math.random() * 5) 

document.body.getElementsByClassName("container")[0].childNodes[5].style.background=`${colors[c3]}`

let c4 = Math.ceil(Math.random() * 5) 

document.body.getElementsByClassName("container")[0].childNodes[7].style.background=`${colors[c4]}`

let c5 = Math.ceil(Math.random() * 5) 

document.body.getElementsByClassName("container")[0].childNodes[9].style.background=`${colors[c5]}`