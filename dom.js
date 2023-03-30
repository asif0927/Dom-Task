let emptyUl=document.querySelector('#emptyul');
let inputValue=document.querySelector('#countriesid');
let addButon=document.querySelector('#button-addon2');
addButon.addEventListener("click",function() {
    if(inputValue.value==""){
        alert('Bos melumat atmayin');
        return;
    }
    let li=document.createElement("li");
    li.textContent=inputValue.value;
    emptyUl.appendChild(li);
});

/*2-ci task */
let input=document.querySelector("#coloriesid");
let btn=document.querySelector("#button-addon1");

btn.addEventListener('click',changeColor);

function changeColor() {
   if(input.value==""){
    alert('Deyer girin');
    return;
   }
   let emptyDiv=document.querySelector("#emptyDiv");
   let childDiv=document.createElement('div');
   emptyDiv.append(childDiv);
   childDiv.style.backgroundColor=input.value;
   childDiv.style.height="200px";
   childDiv.style.width="200px";
   childDiv.style.marginTop="30px"
}