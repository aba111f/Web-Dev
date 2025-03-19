def xOR(a: int, b: int) -> int:
    res = 0
    if (a == 1 and b == 0) or (b == 1 and a == 0):
        res = 1
    return res

a, b = map(int, input().split())

print(xOR(a, b))