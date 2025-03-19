def factorial(num):
    if num < 0:
        return -1
    if num == 0 or num == 1:
        return 1
    return num * factorial(num - 1)

n = int(input())

letters = input().split()
k = int(input())


poss = factorial(n) // (factorial(n - k) * factorial(k))

indicesOfA = []
times = 0
for index, letter in enumerate(letters):

    if letter == 'a':
        times += 1
        indicesOfA.append(index + 1)
        if times == k:
            break
# print(indicesOfA)

i = 1
j = 2
need = 0
while i < n:
    if j == n:
        if (i and j) or i or j in indicesOfA:
            need += 1
        i += 1
        j = i + 1
        
    else:
        if (i and j) or i or j in indicesOfA:
            need += 1
        # print(i , j)
        j += 1

ans: float = (need - 1) / poss
print(round(ans, 4))

    
