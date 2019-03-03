create PROCEDURE createCredentials  @FirstName varchar(50) , @LastName varchar(50), @Email nvarchar(50), @Password nvarchar(100), @Status nvarchar(10), @Role nvarchar(50),@Department nvarchar(30),@Location nvarchar(30)
AS
BEGIN TRAN
BEGIN TRY
INSERT INTO [login] VALUES (@Email, @Password, @Status, @Role)
insert into Employee(FirstName,LastName,NickName,Designation, Email, Status,Department,Location) values(@FirstName,@LastName,@FirstName,@role,@Email, @status,@Department,@Location)
COMMIT TRAN
SELECT * FROM [login]
SELECT * FROM Employee
END TRY
BEGIN CATCH
ROLLBACK TRAN
END CATCH
GO
drop procedure createCredentials

--EXEC createCredentials 'arpit.dave@cygrp.com', 'arpit', 'Active', 'Employee'

