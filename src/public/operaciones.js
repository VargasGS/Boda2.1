function GetCampos() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/campos/" + document.getElementById("nombre").value, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {


      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        var camp = document.getElementById("campos");

        camp.innerHTML = "";
        JSON.parse(this.responseText).forEach(function (data, index) {
          camp.innerHTML += "<p>" + data.Campos + "</p>";
        });
      }
    };
  }


  function GetCampos2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/campo/" + document.getElementById("nombre").value, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {


      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var tbody = document.getElementById("campos2").querySelector("tbody");
        tbody.innerHTML = "";
        JSON.parse(this.responseText).forEach(function (data, index) {
          tbody.innerHTML += "<tr><td>" + data.NomInv + "</td></tr>";
          
        });

        document.getElementById("btnContinuar").style.display='block';

      }else if(this.readyState == 4 && this.status == 404){

        var tbody = document.getElementById("campos2").querySelector("tbody");
        tbody.innerHTML = "";
        document.getElementById("btnContinuar").style.display='none';

        var camp = document.getElementById("campos");

        camp.innerHTML = "";
         
        Swal.fire(
          'Error',
          'El nombre ingresado no existe',
          'error'
      )
      }
    };
  }




  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, { 'height': 650, 'indicators': false });
  });


  let daysItem = document.querySelector("#days");
 let hoursItem = document.querySelector("#hor");
 let minItem = document.querySelector("#min");
 let secItem = document.querySelector("#sec");


 let countDown = () => {
   let futureDate = new Date("20 Aug 2022, 14:00:00");
   let currentDate = new Date();
   let myDate = futureDate - currentDate;
   //console.log(myDate);

   var days = Math.floor(myDate / (1000 * 60 * 60 * 24));
   var hours = Math.floor((myDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((myDate % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((myDate % (1000 * 60)) / 1000);


   
   daysItem.innerHTML = days;
   hoursItem.innerHTML = hours;
   minItem.innerHTML = minutes;
   secItem.innerHTML = seconds;
 }

 countDown()

 setInterval(countDown, 1000)

  function SetUserName()
{
    var pnr = document.getElementById('nombre').value;

    window.localStorage.setItem('text1', pnr);

    const storedFnamn = localStorage.getItem('text1'); 


    window.location.href = "/conf";

}


function fun()
{

var nom3=document.getElementById("fname");
nom3.value=localStorage.getItem("text1");
}


function act()
{

document.getElementById("fname").disabled=false;
}


function prin()
{
 
    window.location.href = "/";

}


let input = document.getElementById('nombre')



	input.addEventListener('keyup', (event) => {
		console.log(event);
	});
	












