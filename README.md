This project is a blog website that will host blog posts in a MongoDB database with images, RESTful format, and Semantic UI for front-end to practice a new API (was using BootStrap 4).  Built in goorm.io to host server with the following dependencies and versions: 

	"body-parser": "^1.19.0",
    "ejs": "^2.6.2",
    "express": "^4.17.1",
    "mongoose": "^5.6.7",
    "nodemon": "^1.19.1"

With the following frameworks: 

	-MEAN (no Angular)
	-RESTful API 
	-Semantic UI
	-EJS


Part 1 
#Strucutre and basic UI

	-INDEX/NEW/CREATE/SHOW routes are up and running
	-Basic SemanticUI running with a functioning Navigation Bar
		*Plan to add a collapsing feature
	-Database is running with some sample blog posts
	
Part 2
#Add Edit/Update/Delete routes

	-Routes are up and running
	-No middleware, added sanitizeer to sanitize text fields
	
Part 3
#Styling index.js

	-Fixed main blog page styling
	-Added edit, delete, submit buttons