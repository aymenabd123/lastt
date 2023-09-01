const paragraph = document.getElementById("paragraph")
console.log(paragraph);
let index = 1
const autowrit = () => {
    const arrayPargraph =   `   "مرحبا بكم في مشروعنا الجديد "عندي قضية   `
    paragraph.innerHTML = arrayPargraph.slice(0, index)
    index++
    if (arrayPargraph.length < index) {
        index=1
    }
}
setInterval(autowrit, 100);



