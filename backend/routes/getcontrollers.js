var sql = require('mssql');
var express = require('express');
var router=express.Router();

router.get('/Employee/:id', function (req, res) {
	 var  EmployeeId=req.params.id;
	
   
   

        // create Request object
        var request = new sql.Request();
		request.query("exec getEmployeeDetailsById @EmployeeId="+EmployeeId+";", function (err, recordset){
			  
            if (err){
			console.log(err);}
			else
			{	
         res.send(recordset);
			console.log(recordset);}  
			
		    
        
    });
});
router.get('/skills', function (req, res) {
   
   

        // create Request object
        var request = new sql.Request();
		
		
		request.query("select * from skills", function (err, recordset){
		
           
        // query to the database and get all the records
    
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
			 
		    
        
    });
});
router.get('/login', function (req, res) {
   
   

        // create Request object
        var request = new sql.Request();
		
		
		request.query("select * from login", function (err, recordset){
		
           
        // query to the database and get all the records
    
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
			 
		    
        
    });
});
router.get('/techStack', function (req, res) {
   
   

        // create Request object
        var request = new sql.Request();
		
		
		request.query("select * from techStack", function (err, recordset){
		
           
        // query to the database and get all the records
    
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
			 
		    
        
    });
});


router.get('/employee', function (req, res) {
   
   

        // create Request object
        var request = new sql.Request();
		
		
		request.query("select * from employee", function (err, recordset){
		
           
        // query to the database and get all the records
    
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
			 
		    
        
    });
});
module.exports=router;