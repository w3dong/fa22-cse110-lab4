1. User input is stored in num1 and num2 as string. So when in calculateSum function, the addition of two string would append num2 to num1 rather than adding them together numerically. Therefore for input of 1 and 2, it shows "12" rather than 3.
2. We should change the type of num1 and num2 to number type by using Number(num1) and Number(num2). 
   