function factorial(n)
{
if ((n == 0) || (n == 1))
return 1;
else {
f = (n * factorial(n-1) );
return f;
}

}

console.log(factorial(5));
