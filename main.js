





        function myFunction() {
          var value = document.getElementById("continent").value;
          if (value == "1"){
          document.getElementById("africa").style.display = "block";
          document.getElementById("asia").style.display = "none";
          document.getElementById("samerica").style.display = "none"; 
          document.getElementById("namerica").style.display="none";
          document.getElementById("restworld").style.display="none";
        }else if(value == "2"){
          document.getElementById("asia").style.display = "block";
          document.getElementById("africa").style.display = "none";
          document.getElementById("samerica").style.display = "none";
          document.getElementById("namerica").style.display="none";
          document.getElementById("restworld").style.display="none";
        }else if (value == "3"){
          document.getElementById("asia").style.display = "none";
          document.getElementById("africa").style.display = "none";
          document.getElementById("samerica").style.display = "block";
          document.getElementById("namerica").style.display="none";
          document.getElementById("restworld").style.display="none";
        }else if(value == "4"){
          document.getElementById("namerica").style.display="block"
          document.getElementById("asia").style.display = "none";
          document.getElementById("africa").style.display = "none";
          document.getElementById("samerica").style.display = "none";
          document.getElementById("restworld").style.display="none";
        }else if(value == "5"){
          document.getElementById("namerica").style.display="none"
          document.getElementById("asia").style.display = "none";
          document.getElementById("africa").style.display = "none";
          document.getElementById("samerica").style.display = "none";
          document.getElementById("restworld").style.display="block"

        }
        }       
    