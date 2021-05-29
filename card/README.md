Install:

Step 1: Fork the project.

Step 2: Clone it to your local system.

Step 3: Check if Node is installed in your Operating system.

a) To check if Node is installed, open the command prompt or similar command line tool and type 'node -v'. This should print a version number which means Node is successfully installed.

b) If you see an error, it means that Node is not installed in your OS. You can download Node.js from 'https://nodejs.org/en/download/'. After completing the installation repeat the part (a) of step 3.

Step 4: On command prompt under your cloned folder directory path, run 'npm install' to install all the dependencies.

Step 5: Finally run 'npm start' to start the application.

Step 6: Visit localhost:3000 in your browser.

--------------------------------------------------------------------------------------------------------------------------------------------------------

Working:
1:this is an react application ,which is fetching data from API and showing the data on the grid format with the help of bootstrap framework.

2:I have used  bit of css to give color to the application. 
Method:
1:I have used fetchPosts function to get the api data and using map function display the data as per the need.
2: I have also used setTimeout() method  which calls a function or evaluates an expression after a specified number of milliseconds.  
3: In side the fetchPosts function i have used fetch() method to call the the API.
4: Used material ui which is a  an open-source project that features React components that implement Google's Material Design.
5: Using material ui i have added loading(loader) feature 

--------------------------------------------------------------------------------------------------------------------------------------------------------
How to use it:

1:click on the Get User Button which is located in the navbar at right corner.
2:when you click the button it shows the loading feature which i have added using material ui and after 2 sec it fetch the data from API and shows on the page using grid pattern. 
3:that's it.
