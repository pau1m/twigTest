Run with 

```node index.js```

Note
====

After writing this I realise the problem is not solvable. The example provided does not match
the specification (and neither does my code).


Given an array [1,2,3,4,5] and a divisor 3. 


We are supposed to split the array in to 3 equal parts with the last part having an array length of the modulo.


5%3 = 2. So last length of last array must be 2 giving [4,5]. 
That leaves 3 elements [1,2,3] which cannot be divided equally.