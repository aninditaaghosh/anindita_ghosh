def prime(n)
	for i in (2..n)
		if n%i==0 
		break 
		end
	end
    	if  i==n
	puts n
	end
end

def primelist(a)
puts(" The prime numbers upto #{a} are: ")
	for c in (1..a)
	prime(c)
	end
end

print "Enter the range: "
range= gets.to_i
primelist(range)
