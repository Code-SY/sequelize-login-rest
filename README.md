# Backend documentation

Very simple user authentiaction application implemented using Passport and Sequelize. If you find bugs or have suggestions for improvements don't hesitate to contribute!

# Running
* docker-compose up

# Using
Create user:
[POST] http://localhost:3000/signup
fields needed: username, email, password

Login:
[POST] http://localhost:3000/login
fields needed: username, password

List users:
[GET] http://localhost:3000/users

To be able to list users you will need to provide authorization key in headers. Authorization key is given after succesfull login.