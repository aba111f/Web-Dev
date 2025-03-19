# Not solved
k, m = map(int, input().split())
arr = []
for i in range(k):
    arr.append(list(map(int, input().split())))

maxs:int = []

for i in range(k):
    maximal:int = 0
    for j in range(1, len(arr[i])):
        comp = arr[i][j]
        # print(comp, end=" ")
        if comp >= maximal:
            maximal = arr[i][j]
    maxs.append(maximal)
        
sMax = 0
for elem in maxs:
    
    sMax += elem ** 2
print(sMax)
print(int(sMax % m))
