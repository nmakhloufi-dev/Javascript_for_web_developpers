const findLongestWord = words => {
    // Utilisation de reduce() pour trouver le mot le plus long
    const longestWord = words.reduce((longest, currentWord) =>
      currentWord.length > longest.length ? currentWord : longest
    , "");
  
    return longestWord;
  };
  

 const wordArray = ["Pneumonoultramicroscopicsilicovolcanoconiosis ",   "Hippopotomonstrosesquipedaliophobia", 
   "Supercalifragilisticexpialidocious",
    "Antiestablishmentarianism", "Floccinaucinihilipilification"];
    
  const longest = findLongestWord(wordArray);
  console.log("The longest word is:", longest);
  