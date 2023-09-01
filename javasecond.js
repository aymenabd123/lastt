const clickbutton = document.querySelectorAll(".btn-primary")
console.log(clickbutton);
const contentt = document.getElementById("contenttt")
console.log(contentt);
const closing = document.getElementById("closing")
clickbutton.forEach(item => {
    item.addEventListener("click",
    (eo) => {
       item.innerText =" ✓ done"
       item.style.backgroundColor ="rgb(21, 115, 71)"
       congrats.style.display ="block"
       show.style.display="block"
      


        const card = eo.target.parentElement.parentElement.parentElement
        console.log(card);
        const imgsrc = card.getElementsByClassName("card-img-top")[0].src
        console.log(imgsrc);
        const ismproduit = card.getElementsByClassName("card-title")[0].innerText
        console.log(ismproduit);
        const price = card.getElementsByClassName("priceee")[0].innerText
        console.log(price);



      const  constinputzayd = ` <div id="contenttt" dir="rtl" class="content-third">
        <div class="firstitem">
          <img src="${imgsrc}" alt="">
          <p class="ismpr">${ismproduit}</p>
          
        </div>
        <div class="seconditem">
          <label >quanitité/kg</label>
          <input class="contity" min="0" value="0" type="number">
        </div>
        <div class="third">
          <p class="price">  ${price}</p>
          <p>/  price</p>
        </div>
        <div class="fourth">
         <p id="closing" class="closed">close</p>
        </div>
      </div>`

      allprocds.innerHTML += constinputzayd
      

    })
    
});


const updateprice = (eo) => {
    const allproductinblack = document.querySelectorAll(".content-third")
    let total = 0
    allproductinblack.forEach(item => {
        const price = Number(item.getElementsByClassName("price")[0].innerText.replace("da", ""))
        console.log(price);
        const contiti= Number( item.getElementsByClassName("contity")[0].value)

        total = total +(price*contiti)
        

    });
    totalprice.innerHTML = `${total} da `
}



ss.addEventListener("click",
(eo) => {
    updateprice()
})










show.addEventListener("click",
(eo) => {

    contentlkhr.style.display="block"
   
})
