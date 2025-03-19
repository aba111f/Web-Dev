binaryNum = int(input())
decimalNum = 0

len = len(str(binaryNum))
i = 1
num: int 
for j in range(len):
    num = binaryNum % 10
    binaryNum /= 10
    binaryNum = int(binaryNum)
    
    decimalNum += i * num
    i *= 2

    
print(decimalNum)