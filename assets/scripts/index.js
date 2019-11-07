"use strict";

//-------------------- BURGER MENU -------------------------

const navSlide = function(){

    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links a');

// Openning:

    burger.addEventListener('click', function(){

        nav.classList.toggle('nav-active');
        burger.classList.toggle('transform');
            
    });
  
// Closing:  

    for(let i=0; i < navLinks.length; i++){   
        navLinks[i].addEventListener('click', function(){

            nav.classList.toggle('nav-active');  
            burger.classList.toggle('transform');

        });
    }
}

navSlide();


//----------------- GALLERY FILTER -------------------------

const filterSelection = function(){

    let filters = document.querySelectorAll(".gallery-btn");
    let images = document.querySelectorAll(".img-block");

    for(let i=0; i < filters.length; i++){
        // console.log(filters[i]);
        
        filters[i].addEventListener('click', function(){
        //     console.log("clicked " + [i]);

            for(let n=0; n < filters.length; n++){
                filters[n].classList.remove('active-filter');
            }
            for(let k=0; k < images.length; k++){
                images[k].classList.add('hide');
                filters[i].classList.add('active-filter');
                if(images[k].dataset.filter == filters[i].dataset.filter || filters[i].dataset.filter == "all"){
                    // console.log(images[k]);
                    images[k].classList.remove('hide');
                
                }
            }
        });

    }
}
filterSelection();