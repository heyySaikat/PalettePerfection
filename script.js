const colors= {
    1:"#00BFFF",
    2:"#DC143C",
    3:"#32CD32",
    4:"#DAA520",
    5:"#9932CC"
};

const container = document.body.getElementsByClassName("container")[0];
const childNodes = container.childNodes;

for (let i = 1; i < 10; i += 2) {
    let randomIndex = Math.ceil(Math.random() * 5);
    childNodes[i].style.background = colors[randomIndex];
}
