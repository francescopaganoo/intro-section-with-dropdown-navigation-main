

function features() {
  document.getElementById("featuresDropdown").classList.toggle("show");
  document.getElementById("features-h").classList.toggle("show-arr");
  document.getElementById("features-s").classList.toggle("hide");

}

function company() {
    document.getElementById("companyDropdown").classList.toggle("show");
    document.getElementById("company-h").classList.toggle("show-arr");
    document.getElementById("company-s").classList.toggle("hide");
}
  
function featuresMobile() {
  document.getElementById("featuresDropdownMobile").classList.toggle("show");
}

function companyMobile() {
  document.getElementById("companyDropdownMobile").classList.toggle("show");
}
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }


  // window.onclick = function(event) {    
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  


  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn--mobile')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content--mobile");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }


  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // showHide = 0;
  // function arrows(){
    
  //   if (showHide == 0){
  //     arrowDown = document.querySelector(".arrow-down").style.display = "none";
  //     arrowUp = document.querySelector(".arrow-up").style.display = "inline";
  //     showHide = 1;
  //   }else{
  //     arrowDown = document.querySelector(".arrow-down").style.display = "inline";
  //     arrowUp = document.querySelector(".arrow-up").style.display = "none";
  //     showHide = 0;
  
  //   }
  // }