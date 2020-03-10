Run with 

```node index.js```

Note
====

After writing this I realise the problem is not solvable. The example provided does not match
the specification (and neither does my code).


Given an array of 5 elements [1,2,3,4,5] and a divisor 3. 


We are supposed to split the array in to 3 equal parts with the last part having an array length of the modulo.


5%3 = 2. So the length of last array must be 2, giving [4,5]. 
That leaves 3 elements [1,2,3] which cannot be divided equally.


This could only work if we interpret "the final part" as an addendum to the array of equally divided parts, thus giving four parts eg [[1], [2], [3], [4,5]]

