1. Line 12 will print the current value of 'i' after the for loop iteration has completed. Since 'i' was declared as a var it is still accessible even outside of the loop scope. Since the array of prices was of length 3, after the for loop, 'i' was holding the value 3. As such, the log statement logged 3 into the console.
2. Line 13 will print 150. Because the code is discounting the price of everything in the array by 50% off, the final time 'discountedPrice' is calculated is for 300. As such 300 * (1 - 0.5) = 150.
3. Line 14 will also print 150. Because the finalPrice is just there to assist with rounding purposes, 150 does not get rounded as it is a whole number.
4. This function will return the array 'discounted' with the new prices at the specified discounted rate.
5. Line 12 will cause an error because 'i' was defined with let, therefore after the for loop it is out of scope and no longer accessible.
6. Line 13 will also cause an error because 'discountedPrice' was defined with let, therefore after the for loop it is out of scope and no longer accessible.
7. Line 14 will still output 150 because finalPrice was initially defined in the main function itself so even though it is defined as a let, it has scope within the entire function as that is the block it is defined in.
8. This function will return the array 'discounted' with the new prices at the specified discounted rate.
9. There will still be an error at line 11 because 'i' is defined with a let so at line 11 it is no longer in scope.
10. Line 12 will output 3 as that is the length of price.length and the constant variable 'length' was set to that in line 4.
11. This function will also return the array 'discounted' with the new prices at the specified discount rate.
12. Question 12
    1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher'].name
    5. student.courseLoad[0]
13. Question 13
    1. 32 because integers map to their exact string representation
    2. 1 because strings are converted to numbers for subtraction
    3. 3 because null is converted to 0
    4. 3null because null is converted into a string for string concatenation
    5. 4 because true gets converted to 1
    6. 0 because false and null both get converted to 0
    7. 3undefined because undefined gets converted into a string for string concatenation
    8. NaN because undefined becomes NaN
14. Question 14
    1. true because '2' is converted into a number
    2. false because in dictionary comparison the first char "1" is less than the first char "2"
    3. true because '2' gets converted into a number
    4. false because === is strict equality and 2 and '2' are of different types
    5. false because true gets converted to 1 and 1 != 2
    6. true because Boolean(2) converts any non-'empty' values into true. Hence true === true is true
15. The == operator will make type conversions whereas the === operator is strict equality and will not convert types
16. Located [Here!](/expose/javascript/part2-question16.js)
17. The function would return the array [2,4,6] because the doSomething function just multiplies the number by 2. What the modifyArray function does is it iterates through the array and runs each value through the "callback" function which in this situation is the "doSomething" function
18. Located [Here!](/expose/javascript/part2-question18.js)
19. The output of this program would be 1 4 3 2. It would first run through the code without timeout delays, then it would go through code with delays in order of least to highest delay value