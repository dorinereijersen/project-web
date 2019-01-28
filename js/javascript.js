/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

 

//micro-interactie like button

    var button = document.querySelectorAll('article header button');

    console.log(button);

    //loop -> button een erbij
    for (var i = 0; i < button.length; i++) {


        button[i].addEventListener("click", function () {
            var span = this.lastElementChild;
            span.classList.toggle('stijl');
            var spanGetal = parseInt(span.innerText);
            console.dir(this);
            var paars = this.firstElementChild.lastElementChild;
            paars.classList.toggle('stijl');
            var haartje = this.firstElementChild;
            console.log(haartje);
            haartje.classList.toggle('stijl');

            if (haartje.classList.contains('stijl')) {
                spanGetal = spanGetal + 1;
                span.textContent = spanGetal;

            } else {
                spanGetal = spanGetaltje - 1;
                span.textContent = spanGetal;
            }
        });
    }


// micro-interactie download button

var saveButton = document.querySelectorAll('article ul li:nth-child(2) img');
var alleButtons = Array.from(saveButton);

alleButtons.forEach((item) => {
    item.addEventListener('click', () => {
        item.src = 'images/laad.gif';
        setTimeout ( function(){ 
item.src='images/klaar.png' }, 2000)
        console.log('Test');
    })
})





