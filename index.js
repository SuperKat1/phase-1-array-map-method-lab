const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
 
function titleCased(list) {
  const listUp = list.map(function(title){
      //split title (the individual string) into an Array of strings (wordArray) whenever a blank space is encountered
      const wordArray = title.split(" ");

      //loop through each element of the array and capitalise the first letter using.map
      const capitalWordArray = wordArray.map(function(word){
          return (word.charAt(0).toUpperCase() + word.slice(1))
          
      })

      //join the elements back into a string
      let capArray = capitalWordArray.reduce((accumulator, word) => accumulator + " " + word);
      
      console.log(typeof(capArray));
             
      })
        
    }

  titleCased(tutorials);

