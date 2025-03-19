def smallest(a: int, b: int, c: int, d: int) -> int:
    min1 = min(a, b, c, d)
    return min1

a, b, c, d = map(int, input().split())

small = smallest(a, b, c, d)
print(small)