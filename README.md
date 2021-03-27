# Installation

* Clone the repository `git clone https://github.com/realdeepnandi/terriblytinytales.git`
* Change the directory `cd terriblytinytales`
* Run the server `npm start`
* The server is running at [localhost:3001](http://localhost:3001)

# Components of the code

<img src="https://cdn.discordapp.com/attachments/797498334133616701/825355018814619708/carbon_2.png" width="540px">
This is the homepage which consists of the form through which we will pass the values to the API.

<img src="https://cdn.discordapp.com/attachments/797498334133616701/825352114535792651/carbon.png" width="540px">
Fetching the get (rollNo) query from the url and passing the roll numbers seperated by comma to an array. For splitting the string of roll numbers, split() is used with ',' as the delimeter.
Further the value of `roll` is checked for unefined value, null value and empty value. If it's true then "Invalid Query" is displayed or else the result is displayed in a tabular format.
The result data is stored in an array and passed to display.pug.

<img src="https://cdn.discordapp.com/attachments/797498334133616701/825354249265217566/carbon_1.png" width="540px">
Then the array passed to the dispaly.pug file is displayed in a tabular structure with foreach loop.

# Libraries and Plugins 

* Node.js
* Expressjs
* Pug
* body-parser
