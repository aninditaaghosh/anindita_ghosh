function fibonacci(len)
{
	var num1=0;
	var num2=1;
	console.log(num1);
	console.log(num2);
	var fibo=0;
		while (len>2)
		{
		fibo=num1+num2;
		console.log(fibo);
		num1=num2;
		num2=fibo;
		len=len-1;
		}
}

fibonacci(7)

