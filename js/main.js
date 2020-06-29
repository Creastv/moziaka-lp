var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 3,
  slidesPerView: 6,
  breakpoints: {
    '@0.00': {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    },
    '@0.75': {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    },
    '@1.00': {
    slidesPerView: 6,
    },
    '@1.50': {
    slidesPerView: 6,
    },
}
});
var galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
  loop:true,
  effect: 'fade',
  loopedSlides: 6, //looped slides should be the same
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: galleryThumbs,
  },

});
// Modals
/* This script supports IE9+ */
(function() {
  /* Opening modal window function */
  function openModal() {
      /* Get trigger element */
      var modalTrigger = document.getElementsByClassName('jsModalTrigger');

      /* Set onclick event handler for all trigger elements */
      for(var i = 0; i < modalTrigger.length; i++) {
          modalTrigger[i].onclick = function() {
            var target = this.getAttribute('href').substr(1);
            var modalWindow = document.getElementById(target);

            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
          }
      }   
  }

  function closeModal(){
    /* Get close button */
    var closeButton = document.getElementsByClassName('jsModalClose');
    var closeOverlay = document.getElementsByClassName('jsOverlay');

    /* Set onclick event handler for close buttons */
      for(var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var modalWindow = this.parentNode.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   

    /* Set onclick event handler for modal overlay */
      for(var i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          var modalWindow = this.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }  

  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);
}());

// Media Query
    // zgoda1 tooltip
    var zgodaWiecej = document.getElementById('open-info');
    var zgodaWiecejSpan = document.getElementById('open-info');
    var zgodaWiecejDisplay = document.getElementById('zgodaWiecejDisplay');
    // zgoda2 tooltip
    var zgodaWiecej2 = document.getElementById('zgodaWiecej2');
    var zgodaWiecejSpan2 = document.getElementById('open-info2');
    var zgodaWiecejDisplay2 = document.getElementById('zgodaWiecejDisplay2');

    zgodaWiecejSpan2.addEventListener('click', function(){

      zgodaWiecejDisplay.style.display = 'none';
      zgodaWiecejSpan.textContent = 'czytaj więcej';

      if (zgodaWiecejDisplay2.style.display == 'block') {
        zgodaWiecejDisplay2.style.display = 'none';
        zgodaWiecejSpan2.textContent = 'czytaj więcej';
      } else {
        zgodaWiecejDisplay2.style.display = 'block';
        zgodaWiecejSpan2.textContent = 'zwiń';
        
      }
    });
    zgodaWiecejSpan.addEventListener('click', function(){
      zgodaWiecejDisplay2.style.display = 'none';
      zgodaWiecejSpan2.textContent = 'czytaj więcej';

      if (zgodaWiecejDisplay.style.display == 'block') {
        zgodaWiecejDisplay.style.display = 'none';
        zgodaWiecejSpan.textContent = 'czytaj więcej';
      } else {
        zgodaWiecejDisplay.style.display = 'block';
        zgodaWiecejSpan.textContent = 'zwiń';
        
      }
    });

    function myFunction(x) {
      if (!x.matches) { // If media query matches
        var swiper = new Swiper('.swiper-wraper', {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          mousewheel: true,
        });
    
        window.onload = function() {
          document.querySelector("input").focus();
        }; 
      }
    }

    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) 
    x.addListener(myFunction) 

// Form Validation
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  // Retrieving the values of form elements 
  var name = document.contactForm.fName;
  var email = document.contactForm.fEmail;
  var phone = document.contactForm.fPhone;

  var zgoda = document.contactForm.zgodaDane;
  var zgoda2 = document.contactForm.zgodaTel;

   
    var nameErr = emailErr = phoneErr = zgodaDaneErr = zgodaTelErr =  true;
    
// Defining error variables with a default value
  // Validate imie i nazwisko
  if(name.value == "") {
      printError("nameErr", "Wprowadź swóje imię i nazwisko.");
      name.style.border = "1px solid red";
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name.value) === false) {
          printError("nameErr", "Wprowadź poprawne imienie i nazwisko.");
      } else {
          printError("nameErr", "");
          local.style.border = "1px solid green";
          nameErr = false;
      }
  }
  // Validate email address
  if(email.value == "") {
      printError("emailErr", "Wprowadź swój adres email.");
      email.style.border = "1px solid red";
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email.value) === false) {
          printError("emailErr", "Wprowdź poprawny adres email");
      } else{
          printError("emailErr", "");
          local.style.border = "1px solid green";
          emailErr = false;
      }
  }
  // Validate phone number
  if(phone.value == "") {
      printError("phoneErr", "Wprowadź swój nr telefonu.");
      phone.style.border = "1px solid red";
  } else {
      var regex = /^[1-9]\d{8}$/;
      if(regex.test(phone.value) === false) {
          printError("phoneErr", "Wprowadź poprawny nr telefonu.");
      } else{
          printError("phoneErr", "");
          local.style.border = "1px solid green";
          phoneErr = false;
      }
  }

  // Validate zgoda o przetwarzanie danych osobowych
  if(!zgoda.checked) {
    printError("zgodaDaneErr", "Pole wymagane.");
    zgoda.style.border = "1px solid red";
    zgodaDaneErr = true;
  } else {
    printError("zgodaDaneErr", "");
    zgodaDaneErr = false;
  }
   // Validate zgoda o otrzymywanie droga tel informacji handlowych 
  if(!zgoda2.checked) {
    printError("zgodaTelErr", "Pole wymagane.");
    zgodaTelErr = true;
  } else {
    printError("zgodaTelErr", "");
    zgodaTelErr = false;
  }
  // Prevent the form from being submitted if there are any errors
  if(( nameErr || emailErr || phoneErr || zgodaDaneErr || zgodaTelErr ) == true) {
     return false;
  }
};



// Google map
function initMap() {
  var uluru = {lat: 52.0981942, lng: 20.9903905};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]}]
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img style="width:100%;" src="img/logo.jpg">'+
      '<div id="bodyContent">'+
      '<h3>ul. Jemiołuszki  / powiat piaseczyński,<br> gmina Lesznowola </h3>'+
      '<a class="cta" href="https://www.google.es/maps/place/Jemiołuszki+40,+05-500,+Polska/@52.0979108,20.9903905,17z/data=!4m5!3m4!1s0x471931f008663b17:0x85f42e61126e6d05!8m2!3d52.0981909!4d20.990251" target="_blank">JAK DOJECHAĆ</a>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Mozaika Lesznowola'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map,marker);
}