
var images = ["one.gif","five.png", "two.png", "four.png" , "three.gif" , "six.png"
  
  ];

document.addEventListener("DOMContentLoaded", function (event) {
   
    console.log("hello world");

   
    loadImages();
});


function loadImages() {
  
    var columns = document.getElementsByClassName("column");
    var columnNum = columns.length;

    
    var putInNum = 0;

   
    console.log("Number of images: "+images.length);
    console.log("Number of columns: "+columns.length);

    
    for(var i = 0; i<images.length; i++){
        
        var newImg = document.createElement("img");
        newImg.className = "images";

         var borders = document.createElement("div");
        borders.className = "borders"

        
        newImg.src = "./images/"+images[i];


        columns[putInNum].appendChild(newImg);

       



        
        putInNum++;

       
        if(putInNum>columnNum-1){
            putInNum = 0;
        }
    }
}

var mysidenav = document.getElementById("mysidenav");

function opennav(){
    mysidenav.style.width= "100vw";
}


