CREATE PROCEDURE updateEmployeeDetailsById
		@EmployeeId int, 
		@FirstName varchar(50),
		@LastName varchar(50),
		@Location varchar(50),
		@DateOfJoining date,
		@DateOfBirth date,
		@PastExperience int,
		@Department varchar(50),
		@ProfilePicUrl varchar(255)
AS
BEGIN
UPDATE Employee
SET FirstName = @FirstName, LastName = @LastName, [Location] = @Location, DateOfJoining = @DateOfJoining, DateOfBirth = @DateOfBirth, PastExperience = @PastExperience, Department = @Department, ProfilepicUrl = @ProfilePicUrl
WHERE EmployeeId = @EmployeeId
SELECT * FROM Employee 
END
GO

--EXEC updateEmployeeDetailsById 6,'Taarak', 'Dhingra', 'Intern', 'taarak.dhingra@cygrp.com', 'Noida', '2019-01-07', '1996-02-15', 1, 'Technical', 'Active', 'Url' 