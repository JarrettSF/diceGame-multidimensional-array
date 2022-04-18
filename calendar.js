var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
        for ( var i = 0; i < months.length; i++ ){
    
    document.write( "<button onclick='calendar( " + i + " ); ' > " + months[i] +"</button>" );
            }


var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          
   

function calendar(m,z) {
    
    var year = 2016;
    
    var month = m;
    
    days = z;
    
    var day = 1;
    
    var d = new Date(year, month, day, 0, 0, 0, 0);
    
    var monthLength = new Date(year, month+1, 0).getDate();
    
    var cal = "<h1>" + months[m] + "</h1>";
    
    
    
        for (var i = 0; i < dayNames.length; i++) {
        
 cal +=   "<th>" +" " + dayNames[i]+ "/</th>";
        
        }
      
    
  
    
   
        
 //  cal += "<tr>" + dayNames + "</tr>";
    
    cal += "<table><tr>";
  
    cal +=  "</tr>";
    
  
    
    cal += "<tr>";
    if ( parseInt( d.getDay()) > 0 ) {
        
        cal += "<td colspan=" + d.getDay() + "></td>";
    }
    
    while( day <= monthLength) {
        
        console.log( "Day " + d.getDate() + " of " + monthLength);
        
        cal += "<td>" + d.getDate() + "</td>";
        
        if (d.getDay() == 6) {       //end of week reached add line
            
            cal += "</tr><tr>";
            
        }
        
        if ( day == monthLength ){
            
            var offSet = 6 - d.getDay();
            
            if ( offSet > 0 ) {
                
                cal += "<td colspan ='" + offSet + "'>&nbsp;</td>";
            }
        }
        day++;
        
        d.setDate(day);
    }
    
    cal += "</tr>";
    
    cal += "</table>";
    
    console.log(cal);
    
    document.getElementById("myCalendar").innerHTML = cal;
}
  
    






const submit = document.getElementById("sub");
const re = /^[01]?[0-9]\/[0-3]?[0-9]\/[12][90][0-9][0-9]$/;
submit.onclick = function () {

    let input1 = e.value;
    let input2 = em.value;
    let input3 = emp.value;  
    let input4 = empt.value;
    let input5 = empty.value;
    let input6 = emptyOut.value;

  if (input1 == "" || input1 != re) {
    alert(" birth date must be filled out in the proper format");
  }return false;   
    
  if (input2 == "") {
    alert(" cannot be blank");
  }return false;
    
      if (input3 == "" || input3 != re) {
    alert(" date reminder must be filled out in the proper format");
  }return false;
  
      if (input4 == "") {
    alert(" please type a reminder");
  }return false;
     
    if (input5 == "" || input5 != re) {
    alert(" date must be filled out in the proper format");
  }return false;
     
    if (input6 == "") {
    alert(" can not be blank time");
  }return false;
    
  }

