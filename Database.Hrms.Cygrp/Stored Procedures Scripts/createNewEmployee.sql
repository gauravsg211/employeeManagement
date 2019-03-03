  create PROCEDURE createNewEmployee 
		@FirstName varchar(50),
		@LastName varchar(50),
		@Designation varchar(50),
		@Email varchar(50),
		@Location varchar(50),
		@DateOfJoining date,
		@DateOfBirth date,
		@PastExperience int,
		@Department varchar(50),
		@Status varchar(10),
		@ProfilePicUrl varchar(255)
AS
BEGIN
insert into Employee values(@FirstName, @LastName, @Designation, @Email, @Location, @DateOfJoining, @DateOfBirth, @PastExperience, @Department, @Status, @ProfilePicUrl) 
SELECT * FROM Employee
END
GO
drop procedure createNewEmployee

select * from employee

--EXEC createNewEmployee 'Taarak', 'Dhingra', 'Intern', 'taarak.dhingra@cygrp.com', 'Noida', '2019-01-07', '1996-02-15', 1, 'Technical', 'Active', 'Url' 