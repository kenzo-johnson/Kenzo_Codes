const dataElement = document.querySelector(".data")
const buttonElement = document.querySelector(".bt")
const thebutElement = document.querySelector(".thebut")
const HmElement = document.querySelector(".hm1")
const CnElement = document.querySelector(".cn1")
const AbElement = document.querySelector(".ab1")
const UlElement = document.querySelector(".ul")
const errorElement = document.querySelector(".error")
const BurgerElement = document.querySelector(".burger")
const line1Element = document.querySelector(".line1")
const line2Element = document.querySelector(".line2")
const line3Element = document.querySelector(".line3")
const frsnmElement = document.querySelector(".frsnm")
const surnmElement = document.querySelector(".surnm")
const mesgeElement = document.querySelector(".mesge")
const re1Element = document.querySelector(".re1")
const re2Element = document.querySelector(".re2")
const req1Element = document.querySelector(".req1")
const req2Element = document.querySelector(".req2")
const nmElement = document.querySelector(".nm")
const miilElement = document.querySelector(".miil")
const egElement = document.querySelector(".eg")
const emElement = document.querySelector(".em")
let errors;
let vari = 1;



let varii = 0;

buttonElement.addEventListener('click', function(){
    if(varii == 0){
        buttonElement.classList.add('sca')
        setTimeout(function(){
            buttonElement.classList.remove('sca')
        },550)
    }
})
function click(){
    alert("hello")
    thebutElement.innerHTML = '<input type="submit" onpointerdown="" class="bt" name="Submit" value="Working">'
}

function menu(){
    if (vari == 1){
        UlElement.classList.toggle('ulmove')
        line1Element.classList.toggle('ln1')
        line2Element.classList.toggle('ln2')
        line3Element.classList.toggle('ln3')
        setTimeout(function(){
            line1Element.classList.toggle('lln1')
            line3Element.classList.toggle('lln3')
        }, 800)
        setTimeout(function(){
            
            line2Element.classList.toggle('lln2')
        }, -500)
        setTimeout(function(){
            UlElement.classList.toggle('uladd')
            vari+=1
        },600)
        
        UlElement.classList.remove('ulaway')
        UlElement.classList.remove('ulrem')
        
        vari+=1
    }
    else{
        UlElement.classList.toggle('ulaway')
        setTimeout(function(){
            UlElement.classList.toggle('ulrem')
            UlElement.classList.remove('ulmove')
            UlElement.classList.remove('uladd')
            vari = 1
        },600)
        line1Element.classList.toggle('ln1')
        line2Element.classList.toggle('ln2')
        line3Element.classList.toggle('ln3')
        setTimeout(function(){
            line1Element.classList.toggle('lln1')
            line3Element.classList.toggle('lln3')
        }, 800)
        setTimeout(function(){
            
            line2Element.classList.toggle('lln2')
        }, 800)
            
        
        
        
       
    }
}

if(dataElement.value == "Home"){
    HmElement.classList.add('active');
    AbElement.classList.remove('active');
    CnElement.classList.remove('active');
}
else if(dataElement.value == "About"){
    HmElement.classList.remove('active');
    AbElement.classList.add('active');
    CnElement.classList.remove('active');
}
else if(dataElement.value == "Contact"){
    HmElement.classList.remove('active');
    AbElement.classList.remove('active');
    CnElement.classList.add('active');
}
