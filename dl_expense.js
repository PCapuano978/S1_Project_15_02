"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Patrick M. Capuano
   Date:   4.19.19
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

// An event listener was added that triggers on load in with an anynomous function that...

window.addEventListener("load", function {


      // ...creates a variable (changingCells) set to the input tags within the travelExp elements with the sum class. 
      var changingCells = document.travelExp.sum.getElementsByTagName("input");

      // And a for loop is created that goes through the changingCells collection and for every item...
      for (var i = 0; i < changingCells.length; i++) {

            // Runs the changingCells variable on change with the calcExp function.
            changingCells.onchange.calcExp();

            // And on click with the submitButton element triggers the validateSummary function.
            document.getElementById("submitButton").click.validateSummary();

      };

});

// The function, validateSummary, is established that has the following commands:
function validateSummary() {

      // A condition is set that if changingCells value is missing within the validity, then a message prompt will appear telling the users as such to include a summary of the trip in their report.
      if (changingCells.validity.valueMissing) {

            changingCells.setCustomValidity("You must include a summary of the trip in your report.");


            // Otherwie, however, and the customValidity is set to an empty string.
      } else {

            changingCells.setCustomValidity("");

      }

      // The calcClass is declared with sumClass being set as a parameter that does the following:
      function calcClass(sumClass) {

            // sumFields as a variable is set to the sumClass elements' values.
            var sumFields = document.getElementsByClassName("sumClass");

            // sumTotal also as a local variable is set to a numerical value of zero.
            var sumTotal = 0;

            // And a for loop is created running through each item in sumFields that for each one...
            for (var i = 0; i < sumFields.length; i++) {

                  // Creates the local itemValue variable that takes the input elements' values from the sumFields variable. 
                  var itemValue = parseFloat(sumFields.getElementsByTagName("input"));

                  // If itemValue is a nurmerical value them it adds itself together.
                  if (isNaN(itemValue)) {

                        itemValue + itemValue;

                  }

            };

            // Lastly here, the value of sumTotal is returned. 
            return sumTotal;

      }

      // The calcExp function is established that sets out to...
      function calcExp() {

            // Set the local varaible of expTable to the table row elements within the travelExp table.
            var expTable = document.travelExp.getElementsByTagName("tr");

            // A for loop is made to each collection of expTable items that sets the input elements' subtotal item to the date item processed through the calcClass function and is formatted to have two digits as well.
            for (var i = 0; i < expTable.length; i++) {

                  document.input.getElementById("subtotal" + [i]) = calcClass(date + [i]).formatNumber(2);

            };

            // calcClass is ran with the following parameters shown below that are also made into two digits values.
            calcClass("trans", "lodge", "meal", "other").formatNumber(2);

            // Finally, global variable expTotal is set to the value of the calcClass result ran with "sum" as a parameter and formatted into the standard United States currency way.
            expTotal = calcClass("sum").formatUSCurrency();

      }

}






function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}