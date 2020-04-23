const modal = document.querySelector('#modal-display');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn  = document.querySelector('.closeBtn');

//events//
modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);

//fucntions to run//
//this one opens the modal containing legal//
function openModal(){
    modal.style.display = 'block';
}
// closes the modal//
function closeModal(){
    modal.style.display = 'none';
}
// closes the model when clicked out side of it.//
function outsideClick(e){
    if(e.target==modal){
        modal.style.display="none";
    }
}

const modalT= document.querySelector('#modal-displayT');
const modalBtnT = document.querySelector('#modalBtnT');
const closeBtnT  = document.querySelector('.closeBtnT');

//events//
modalBtnT.addEventListener('click', openModalT);
closeBtnT.addEventListener('click', closeModalT);
window.addEventListener('click', outsideClickT);

//fucntions to run//
//this one opens the modal containing dummie legal text in terms of service //
function openModalT(){
    modalT.style.display = 'block';
}
// closes the modal//
function closeModalT(){
    modalT.style.display = 'none';
}
// closes the model when clicked out side of it.//
function outsideClickT(e){
    if(e.target==modalT){
        modalT.style.display="none";
    }
}

const modalP= document.querySelector('#modal-displayP');
const modalBtnP = document.querySelector('#modalBtnP');
const closeBtnP  = document.querySelector('.closeBtnP');

//events//
modalBtnP.addEventListener('click', openModalP);
closeBtnP.addEventListener('click', closeModalP);
window.addEventListener('click', outsideClickP);

//fucntions to run//
//this one opens the modal modal containing dummie legal text in privacy policy//
function openModalP(){
    modalP.style.display = 'block';
}
// closes the modal//
function closeModalP(){
    modalP.style.display = 'none';
}
// closes the model when clicked out side of it.//
function outsideClickP(e){
    if(e.target==modalP){
        modalP.style.display="none";
    }
}




const image1=document.querySelector('#image-1') 
const img1=document.querySelector('#img-1');
img1.addEventListener('click', openImg1);
window.addEventListener('click',outsideClickImg);
function openImg1(){
    if (document.documentElement.clientWidth <1025) {
        return 
    }
    else{ image1.style.display = 'block';
    
    }
}
function outsideClickImg(e){
    if(e.target==image1){
        image1.style.display="none";
    }
    
       
}
const image2=document.querySelector('#image-2') 
const img2=document.querySelector('#img-2');
img2.addEventListener('click', openImg2);
window.addEventListener('click',outsideClickImg2);
function openImg2(){
    if (document.documentElement.clientWidth < 1025) {
        return 
    }
    else{image2.style.display = 'block';}
}
function outsideClickImg2(e){
    if(e.target==image2){
        image2.style.display="none";
    }
}
const image3=document.querySelector('#image-3') 
const img3=document.querySelector('#img-3');
img3.addEventListener('click', openImg3);
window.addEventListener('click',outsideClickImg3);
function openImg3(){
    if (document.documentElement.clientWidth < 1025) {
        return 
    }
    else{image3.style.display = 'block';}
}
function outsideClickImg3(e){
    if(e.target==image3){
        image3.style.display="none";
    }
}



