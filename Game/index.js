// function manuplatetheDOM(){
//     // document.getElementById("p5").innerText="This is 5th para";

//     // var element=document.getElementsByClassName("classname");
//     // element[1].style.color="red";

//     // var element=document.getElementsByTagName("p");
//     // alert("No of p element is " + element.length);

//     // var element=document.querySelector(".classname");

//     // console.log(element);

//     // var elements=document.querySelectorAll(".classname");

//     // console.log(elements);

//     // var child=document.getElementById("p8");
//     // var parenId=child.parentNode;

//     // parenTd.style.color="red";
// }

 var currentTurn="X";
 var gameover=false;
function play(id){

    var isStringID= "" +id;

    var isNotAEmptyCell=document.getElementById(isStringID).innerText !=="";
    if(isNotAEmptyCell || gameover){
        return;
    }
    document.getElementById(isStringID).innerText=currentTurn;
    calculatewinner();
    if (currentTurn ==="X"){
        currentTurn="O";

    }
    else{
        currentTurn="X";
    }
   
    }

    function calculatewinner(){
        var cell1Value=document.getElementById('1').innerText;
        var cell2Value=document.getElementById('2').innerText;
        var cell3Value=document.getElementById('3').innerText;
        var cell4Value=document.getElementById('4').innerText;
        var cell5Value=document.getElementById('5').innerText;
        var cell6Value=document.getElementById('6').innerText;
        var cell7Value=document.getElementById('7').innerText;
        var cell8Value=document.getElementById('8').innerText;
        var cell9Value=document.getElementById('9').innerText;
//row
        if((cell1Value!=="" && 
        cell1Value===cell2Value && 
        cell2Value ===cell3Value
        )||
        
        (cell4Value!=="" && 
        cell4Value===cell5Value && 
        cell5Value ===cell6Value
        ) ||

        (cell7Value!=="" && 
        cell7Value===cell8Value && 
        cell8Value ===cell9Value
        )
        ||
        //column
        (cell1Value!=="" && 
        cell1Value===cell4Value && 
        cell4Value ===cell7Value
        )
        ||
        (cell2Value!=="" && 
        cell2Value===cell5Value && 
        cell5Value ===cell8Value
        )
        ||
        (cell3Value!=="" && 
        cell3Value===cell6Value && 
        cell6Value ===cell9Value
        )
        //dignons
        ||
        (cell1Value!=="" && 
        cell1Value===cell5Value && 
        cell5Value ===cell9Value
        )
        ||
        (cell3Value!=="" && 
        cell3Value===cell5Value && 
        cell5Value ===cell7Value
        )
        )
        
        {   
            gameover=true;
            document.getElementById("message").innerText="Game Over." +currentTurn +"Won";
        }
        
        
    }

    function reset(){
        location.reload();
    }
    

