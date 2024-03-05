"use strict";
// Think of something you could store in a array. For example, you could make a list of
//  mountains, rivers, countries, cities, languages, or anything else you’d like. 
//  Write a program that creates a list containing these items. 
let listLanguage = ["Urdu", 'Punjabi', "Sindhi", `Bangoli`];
console.log("Length of list items: ", listLanguage.length);
console.log("Items of list are : ", listLanguage);
console.log("First Element is", listLanguage[0]);
console.log("First Element is", listLanguage[1]);
console.log("First Element is", listLanguage[2]);
console.log("First Element is", listLanguage[3]);
console.log("First Element is", listLanguage[4]); //Undefined message
/**Adding element by help of push menthod */
listLanguage.push("Hindi");
/**Element is added at the last position of list */
console.log("Items of list are : ", listLanguage);
/**We can also edit / change element values by index */
listLanguage[0] = "Arabic";
console.log("Items of list are : ", listLanguage);
/**Slice method is used to item at specific location, delete element and also add new values*/
listLanguage.slice(1, 0);
console.log(listLanguage);
