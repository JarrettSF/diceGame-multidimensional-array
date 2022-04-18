
let data = prompt("How many times should the dice roll?")



function diceRoll() {
    
    
    
    
    let freq = [,0,0,0,0,0,0,0,0,0,0,0,0]
    let diceSum = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    
    let freq2 =  [[0, 0, 0, 0, 0, 0, 0], 
		 [0, 0, 0, 0, 0, 0, 0], 
		 [0, 0, 0, 0, 0, 0, 0], 
		 [0, 0, 0, 0, 0, 0, 0],
		 [0, 0, 0, 0, 0, 0, 0], 
		 [0, 0, 0, 0, 0, 0, 0], 
		 [0, 0, 0, 0, 0, 0, 0]];
  
    
    var diceTotal = 0;
    var dice;
    var dice1;
    

    for (var i = 0; i < data; i++)
        {   dice = Math.floor(1+ Math.random() * 6);
            dice1 = Math.floor(1+ Math.random() * 6);  
        
         
        
         diceTotal = dice + dice1;
         
                freq2[dice][dice1]++
     

        freq[diceTotal] += 1;
        
        }

    
    display("Dice Game", diceSum, freq, document.getElementById("die1") );
   display1("Combinations:", freq2, document.getElementById("die2") );
   
    
                }

 

function display (heading, theArray, theArray2, output)

{
    var content = "<h2>" + heading + "</h2><table>" + "<thead><th>Number</th><th>Frequency</th></thead><tbody>";
    
        var length = theArray.length;
        
        var lengthy = theArray2.length;
    
    for (var i = 0; i < length; i++)
    {
       content += "<tr><td>" + theArray[i] + "</td><td>" + theArray2[theArray[i]] + "</td></tr>" ; 
        
    }
    
    content += "</tbody></table>";
    
    output.innerHTML = content;   
    
}

function display1 (heading, ary, output)

{
    var content = "<h2>" + heading + "</h2><table>" + "<thead><th>Number</th><th>Frequency</th></thead><tbody>";
    
        var length = ary.length;
        
       
    
      for ( sum = 1; sum <=6 ; sum++ )
   for (sum2 = 1; sum2 <=6; sum2++)
    {
       content += "<tr><td>" + sum + ":" + sum2 + "</td><td>" + 
           ary[sum][sum2] + "</td></tr>" ; 
        
    }
    
    content += "</tbody></table>";
    
    output.innerHTML = content;   
    
}
    


window.addEventListener("load", diceRoll, false);