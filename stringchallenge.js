// ************INCLASS STRING CHALLENGE************
const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";

// STEP 1: Find and output the starting position of the word "orphans". (use a console.log for this)
console.log('index of orphans', sonnet.indexOf('orphans'));

// STEP 2: Output the number of characters in the sonnet.(use a console.log for this)
console.log('length of characters in sonnet:', sonnet.length);

// STEP 3: Replace the first occurance of the string "winter" with "yuletide".
let newSonnet = sonnet.replace('winter', 'yuletide');
console.log('newSonnet: ', newSonnet);

// STEP 4: Replace all occurances of the string "the" with "a large".
// assigning it to itself because replace is reassigning variable
// newSonnet = newSonnet.replace(/ the /g, ' a large ');
// other option
let secondNewSonnet = newSonnet.replace(/ the /g, ' a large ');

// STEP 5: Once you have the final string print it to the sonnet div.
// we could make this a function but we arent going to reuse it
const sonnetDiv = document.getElementById('sonnet');
sonnetDiv.innerHTML = `<h3>${secondNewSonnet}</h3>`;