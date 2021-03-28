# Installation

* Clone the repository `git clone https://github.com/realdeepnandi/terriblytinytales.git`
* Change the directory `cd terriblytinytales`
* Run the server `npm start`
* The server is running at [localhost:3001](http://localhost:3001)

# Components of the code

<img src="https://cdn.discordapp.com/attachments/797498334133616701/825639189403009044/carbon_4.png" width="540px">
This is the homepage which consists of the form through which we will pass the values to the API.

<img src="https://cdn.discordapp.com/attachments/797498334133616701/825639189403009044/carbon_4.png" width="540px">
This script changes the content of the button and disables it.
https://cdn.discordapp.com/attachments/797498334133616701/825640080902979614/carbon_6.png
<img src="https://cdn.discordapp.com/attachments/797498334133616701/825638670961737728/carbon_3.png" width="540px">
Fetching the get (rollNo) query from the url and passing the roll numbers seperated by comma to an array. For splitting the string of roll numbers, split() is used with ',' as the delimeter.
Further the value of `roll` is checked for unefined value, null value and empty value. If it's true then "Invalid Query" is displayed or else the result is displayed in a tabular format.
The result data is stored in an array and passed to display.pug.

<img src="https://cdn.discordapp.com/attachments/797498334133616701/825354249265217566/carbon_1.png" width="540px">
Then the array passed to the dispaly.pug file is displayed in a tabular structure with foreach loop.

# Test Cases

## Test Case 1

### Data passed : `5,6,9,12,18,20,25,30,32,36,37,38,40,42,45,47,49,50`
<img src="https://cdn.discordapp.com/attachments/797498334133616701/825357075613876245/unknown.png" width="540px">

### Output
<img src="https://cdn.discordapp.com/attachments/797498334133616701/825357706108862494/unknown.png" width="540px">

## Test Case 2

### Data passed : `128`
<img src="https://cdn.discordapp.com/attachments/797498334133616701/825358054480150578/unknown.png" width="540px">

### Output
<img src="https://cdn.discordapp.com/attachments/797498334133616701/825358126970306570/unknown.png" width="540px">


# Libraries and Plugins 

* Node.js
* Expressjs
* Pug
* body-parser
