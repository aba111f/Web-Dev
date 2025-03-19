import math
a = (input())
newstr = ""
for i in range(len(a) - 1, -1, -1):
    newstr += a[i]

print(int(newstr))
