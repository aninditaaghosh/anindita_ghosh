function isVowel(char)
{
  if (char.length == 1)
  {
    var vowels = new Array('a','e','i','o','u');
    var isVowel = false;

    for(i in vowels)
    {
      if(vowels[i] == char)
      {
        isVowel = true;
      }
    }

    return isVowel;
  }
}

console.log(isVowel('b'));
