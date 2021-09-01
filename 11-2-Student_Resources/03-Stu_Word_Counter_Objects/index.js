function wordCount(myString) {
  // Convert string to an array of words
  var stringArray = myString.split(" ");

  // An object to hold word frequency
  var wordFrequency = {};

  // Iterate through the array
  stringArray.forEach(function(currentWord){
    // If the word has been seen before...
    if (wordFrequency[currentWord] !== undefined) {
      // Add one to the counter
      wordFrequency[currentWord] += 1;
    }
    else {
      // Set the counter at 1
      wordFrequency[currentWord] = 1;
    }

  });
  console.log(wordFrequency);
  return wordFrequency;
}

wordCount("We hold these truths to be self evident, that all men are created equal");
