
n = int(input())
res = 1
for i in range(n):
    a, b = map(int, input().split())
    res *= a / b


print(res.as_integer_ratio())
