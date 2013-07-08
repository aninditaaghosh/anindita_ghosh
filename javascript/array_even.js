function array_even(array)
{
  var even = [];
   var i=0;
  var j=0;
  for (i = 0; i != array.length; i++)
    {
         if((array[i]%2)===0)
		{
         	   even[j]=array[i];
	           j=j+1;
		}
    }
return even;
  
}

console.log( array_even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
