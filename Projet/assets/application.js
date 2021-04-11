(async function() {
    const drawer = document.getElementById("drawer");
    drawer.addEventListener("click", function(){
        const div = document.querySelector('.nav__container__links');
        if(div.classList.contains("show")){
            div.classList.remove("show");
        }else{
            div.classList.add("show");
        }
        drawer.querySelectorAll('img').forEach((img)=>{
            img.hidden=!img.hidden;
        })
    });
})();

(async function() {
    document.
      querySelectorAll('#more').forEach((el)=>{
        const product = el.dataset.product;
        const text = document.getElementById(product)
        el.addEventListener('click', function () {
          if (text.classList.contains("show-bis")){
            text.classList.remove("show-bis");
          }else{
            text.classList.add("show-bis");
          }
          el.querySelectorAll('img').forEach((img)=>{
            img.hidden = !img.hidden;
          })
        })
      })
  })();