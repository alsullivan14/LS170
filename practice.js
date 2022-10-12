// write a function that returns 1 if first string is largest or -1 if second string is largest
// if equal length return 0

function compareByLength(str1, str2) {
   let notEqual = str1.length === str2.length ? 0 : str1.length - str2.length;
   if (notEqual) {
     let log = notEqual < 0 ? -1 : 1;
     console.log(log);
   } else {
     console.log(0)
   }
}




compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0