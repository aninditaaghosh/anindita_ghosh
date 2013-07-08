function palindrome(num)
   {
    var x=num;
    var p=0;
    var rev=0;
 
    while(x>0)
      {
        p=x%10;
	rev=rev*10 +p;
	x=Math.floor(x/10);
      }  
     if(rev===num)
       return true;
     else
      return false;
   }
console.log(palindrome(1210));


