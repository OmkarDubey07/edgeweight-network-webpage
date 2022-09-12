//                              TIMER TO COMING SOON SECTION


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d : " + hours + "h :  "
  + minutes + "m : " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

                            // TIMER SECTION  end here


                      // BRAND NAME SLIDER

const sliderCont = document.getElementById("slider");
const leftBtn = document.querySelector("#left-btn button");
const rightBtn = document.querySelector("#right-btn button");

// show the particular slider images

let left = 3 ;
let  right = 5;
function show(){
    for (let i =left ; i <=right ; i++){
      document.getElementById("c"+i).style.display="inline-block";
    }
}

 // on click left button 

leftBtn.addEventListener('click' , function()
  {
    if (left <=3 && right <=7)
    {
      document.getElementById("c"+left).style.display= "none";
      left+= 1;
      right+= 1;

      for (let i =left ; i <=right ; i++){
        document.getElementById("c"+i).style.display="inline-block";
      }
    }
    else return;
  });

  // onn click  right button

  rightBtn.addEventListener('click' , function()
  {
    if (left >=3 && right >=3)
    {
      document.getElementById("c"+right).style.display= "none";
      left-= 1;
      right-= 1;

      for (let i =left ; i <=right ; i++){
        document.getElementById("c"+i).style.display="inline-block";
      }
    }
    else return;
  });

                            // slider part end

  
