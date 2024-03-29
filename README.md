This project is a blog website that will host blog posts in a MongoDB database with images, RESTful format, and Semantic UI for front-end.  

Currently hosed on https://fathomless-reef-18231.herokuapp.com/blogs

NODE dependencies and versions: 
    
    "body-parser": "^1.19.0",
    "ejs": "^2.6.2",
    "express": "^4.17.1",
    "express-sanitizer": "^1.0.5",
    "method-override": "^3.0.0",
    "mongodb": "^3.3.0-beta2",
    "mongoose": "^5.6.8"




Changes/Additions
=======

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
	
Part 4
#Finalize styling

	-Finalized some styling, made buttons the same style throughout
	-Fixed navbar
	-Responsive on mobile
	-Color scheme changes
	-Cleaned up code a bit
	
Part 5
#Finished styling and setting up for deployment

	-Added an atlasMongoDB (cloud database) link instead of local
	-Added a stand-in entry for an empty blog situation


TODO's/Nice-to-have's
=======
	-Remove dependencies
	-Add login functionality
	-Add date/timestamps
	
	
Screenshots of blog pages
=======


![Home Page]https://ibb.co/yXVnwLg

![Blog View Page]https://ibb.co/hf3qj30

![New Blog Page]https://ibb.co/5GVnMsz

![Edit Blog Page]https://ibb.co/NFqYfWP
