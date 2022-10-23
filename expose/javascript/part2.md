1. It will print 3 because inside of the for loop, i is declared with var and start as 0 and increment by 1 util it is no longer smaller than length of input array prices. Length of prices is 3 in this case, so when i equals 3, loop will end and when we enter line 12, 3 is printed.

2. It will print 150 because in the last loop, in line 7 discountedPrice is updated with prices[2] (which is 300, last element of prices) * (1-discount)(which is 1-0.5=0.5) = 150. As discountedPrice is declared with var, discountedPrice could be updated to 150 and in line 13, 150 is printed. 

3. It will print 150 because in the last loop, in line 7 discountedPrice is updated with prices[2] (which is 300, last element of prices) * (1-discount)(which is 1-0.5=0.5) = 150. Than in line 8, at first, discountedPrice * 100 equals 15,000, which is a integer. So after Math.round(15,000) = 15,000, and it is being divided by 100, we get 15,000/100 = 150. Because finalPrice is declared with var, finalPrice is updated to 150 and in line 14, 150 is printed. 

4. It will return a array of [50,100,150]. 'discounted' is defined with var, so finalPrice can be inserted and returned. The function returns a array of finalPrice, which is calculated by each entry in prices array * (1-0.5), than *100, round up, and divided by 100. Because [100,200,300] is all divisible by 2, half of them are all integer so after *100, round up, and divided by 100, they remain the same. Thus, the returned array is consisting of each entry * 0.5, which would be [50,100,150].

5. ERROR. Because i is declared with let keyword, it can be only accessed by block it is defined in, which is within the for loop. Line 12 is outside of the for loop, so compiler would suggest that i is undefined.

6. ERROR. Because discountedPrice is declared with let keyword, it can be only accessed by block it is defined in, which is within the for loop. Line 13 is outside of the for loop, so compiler would suggest that discountedPrice is undefined.

7. It will print 150 because in the last loop, in line 7 discountedPrice is updated with prices[2] (which is 300, last element of prices) * (1-discount)(which is 1-0.5=0.5) = 150. Than in line 8, at first, discountedPrice * 100 equals 15,000, which is a integer. So after Math.round(15,000) = 15,000, and it is being divided by 100, we get 15,000/100 = 150. Because finalPrice is declared with let in the block of function, finalPrice can be updated to 150 in line 14 (also inside of function), and 150 is printed.

8. It will return a array of [50,100,150]. 'discounted' is defined with let inside of the function block, so do finalPrice (defined with let inside of the function block). Thus, finalPrice can be inserted into discounted inside of function and get returned. The function returns a array of finalPrice, which is calculated by each entry in prices array * (1-0.5), than *100, round up, and divided by 100. Because [100,200,300] is all divisible by 2, half of them are all integer so after *100, round up, and divided by 100, they remain the same. Thus, the returned array is consisting of each entry * 0.5, which would be [50,100,150].

9. ERROR. Because i is declared with let keyword, it can be only accessed by block it is defined in, which is within the for loop. Line 11 is outside of the for loop, so compiler would suggest that i is undefined.

10. It will print 3 because length of array prices is 3 in this case. length is declared with const and length of array prices 3, and it is not reassigned with any other value, so no error occur and 3 is printed in line 12. 

11. It will return a array of [50,100,150]. 'discounted' is defined with const, so it means it cannot be reassigned to a new array but it can be added with new values. discountedPrice is also declared with const in for loop, but because in each loop we do a new declaration with its intial assignment to value, it can be inserted into array and returned. The function returns a array of finalPrice, which is calculated by each entry in prices array * (1-0.5), than *100, round up, and divided by 100. Because [100,200,300] is all divisible by 2, half of them are all integer so after *100, round up, and divided by 100, they remain the same. Thus, the returned array is consisting of each entry * 0.5, which would be [50,100,150].

12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A. '32'. 2 convert to its string representation and append to '3'.
    B. 1. '3' can convert to number 3 and 3 minus 2 equals 1.
    C. 3. null convert 0, so 3 + 0 = 3.
    D. '3null'. null becomes string 'null' and append to '3'.
    E. 4. true can convert to 1, so 1+3=4.
    F. 0. false and null convert to 0, so 0+0=0.
    G. '3undefined'. undefined convert to string 'undefined' and append to 3.
    H. NaN. '3' can convert to 3 but undefined would convert to NaN, and 3-NaN = NaN. 

14. A. true. '2' convert to 2 and 2 > 1.
    B. false. In string comparison letter by letter, '2' > '1', so '2' > '12'
    C. true. '2' can become 2, so '2' == 2.
    D. false. === check equality without type conversion, '2' is string but 2 is a number so '2' != 2.
    E. false. true can convert to 1, and 1 != 2.
    F. true. Boolean(2) gives true because 2 > 0, so Boolean(2) == true. 

15. == checks equality by type conversion, but === check equality without type conversion. 
    
17. This function call would return [2,4,6]. When we call modifyArray with [1,2,3], inside of function, we would loop through each element, and make call to the callback function doSomething that returns double of current element (1 * 2 = 2, 2 * 2 = 4, 3 * 2 = 6) to be appended to the new result array. So the result array would be [2,4,6]. But since we are not making any console.log() call, there would be nothing printed out. 

19. It would be: 
    1
    4
    3
    2
    Two console log without setTimeOut is executed first, then 3 in which delay is 0s will be printed out, and finally after 1s, 2 is printed out. 