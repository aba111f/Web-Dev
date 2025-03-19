n = int(input())
arr = list(map(int, input().split()))
count = 0
isSame = False
for i in range(1, len(arr)):
    if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
        isSame = True
        break
if isSame:
    print("YES")
else:
    print("NO")
    

