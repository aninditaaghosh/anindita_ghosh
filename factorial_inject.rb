def factorial(n)
 puts (1..n).inject('*')
end


print "Enter a number to determine its factorial: "
num= gets.to_i

factorial(num)
