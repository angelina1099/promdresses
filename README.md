Hello! 

This is a template for Sherry Hills (Prom Dress Webpage) - St Marg's project.
Main Website Design is for students to take a look at the different fashion styles for Proms/Dinner&Dance/any other events.
Basically, there is Navigation Bar at the top of webpage for easy sorting of various types of Dresses.
Navbar tabs include: Accessories (with dropdown options), Cocktail Dresses, Ballroom Gowns, Mini Dresses, Sheath Dresses & A-line dresses.

1) There are missing TABS, so do fill them in BOTH "welcome.html" & "menu.html" files (e.g. Adding more lines after this code: 

        <li><a href="#/menu/cocktail_d"> Cocktail Dresses </a></li>) 

Next thing we need to work on is the <!--Pictures--> segment within "welcome.html" file. These are pictures of the different categories of dress we have on our website. 

2) So, just add on another 2 cards within the code (any questions, feel free to ask)! 

3) Do change any information/ text within the "welcome.html" file (at the bottom of the page) as the information is just part of this template.

Moving on, we will look at the "app.js" file. 
The routing have been done for you, but you need to look to this file to reference it back every now & then, especially when working with "controllers.js" file.
4) Check through the "templates" FOLDER, and try to insert new file that are missing. 

5) Add in the routing for various tabs not included in this template (namely: Ballroom Gowns, Mini Dresses, Sheath Dresses & A-line dresses.)
So one set will look like this: 

        .state('menu.cocktail_d', {
    		url:"/cocktail_d",
    		templateUrl:"templates/cocktail_d.html",
    		controller: "cocktail_dCtrl"
    	}) 
Just replace 'cocktail_d' with other names you give for the tabs.

6) After, remember to add in the controllers in the "controllers.js" file too.
So one basic set will look like this: 
                        
        .controller ('earringsCtrl', function ($scope){
                        
        })

7) JSON files
We can find our JSON files via this directory: (assets/json/whatever.json)
In this template, there are 2 json files with rough templates ("c_necklaces.json" 
& "s_necklaces.json" files) Do fill up more things for each json file, and create NEW json files for the rest of the categories.
This can be done by different individuals of the group. For instance, one member can be incharge of researching and coming up with 1 or 2 json files. 
You can share your Cloud 9 workspace with your group members and copy the relevant files across. Or another method would be saving the json file as a Microsoft doc file, and attaching the relevant images saved in an email. After, you have to transfer these information into your NEW JSON file and dragging the new images into the 'images' folder.

That's all for now! 

Happy coding!
Miss Ong
