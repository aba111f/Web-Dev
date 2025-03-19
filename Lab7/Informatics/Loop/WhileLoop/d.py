num = int(input())
i = 0
isPower = False
while True:
    if 2**i == num:
        isPower = True
        break
    if 2**i > num:
        break
    i+=1
if isPower:
    print("YES")
else:
    print("NO")