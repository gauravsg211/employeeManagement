
	  
	
	$(document).ready(function(){  
	
	$("#bt1").click(submission);
	  
function submission(){
	
	
	 alert("hello");
            var first_name= document.getElementById("fname").value;
            var last_name= document.getElementById("lname").value;
            var nick_name= document.getElementById("fname").value;
            var location= document.getElementById("location").value;
            var email= document.getElementById("email").value;
            var designation = document.getElementById("designation").value;  
            var department = document.getElementById("department").value;
            var doj = document.getElementById("DOJ").value;
            var password = document.getElementById("password").value;
            var dataToSend={
                "FirstName": first_name,
                "LastName": last_name,
				"NickName":nick_name,
                "Location": location,
                "Email": email,
                "Role": designation,                
                "Department" :department,
                "DateOfJoining":doj,
                "Password":password,
				"Status":"active"

                };
				 
            $.ajax({
                url: 'http://localhost:5000/addcredentials',
                data: dataToSend,
                type:'POST',
                dataType:'json',
                success:function(res){
                    console.log(res);
                  
                }
             });
            }
			
			
			$("#userTable").click(getemployee);
          
		  function getemployee(){
			  
			 
		 
        
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:5000/employee',        
                    success: function(data) {
						
						console.log(data.length);
                        for(i=0; i<data.length;i++){
                            $('#user_table').append(
                                '<tr><td id = "'+data[i].EmployeeId+'">' + data[i].FirstName+" "+data[i].LastName +
                                '</td><td>' + data[i].Email + 
                                '</td><td>'+data[i].Status + '</td>'+
                                '</tr>'
                                );
                            }  
                        }  
                    });
		  }
		  function getskills()
		  {
			  
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:5000/skills',        
                    success: function(data) {
                        for(i=0; i<data.length;i++){
                            $('#user_table').append(
                                '<tr><td>' + data[i].Name+
                                '</td><td>' + data[i].Category+
                                '</tr>'
                                );
                            }  
                        }  
                });
		  }
				
				
	});
          
          