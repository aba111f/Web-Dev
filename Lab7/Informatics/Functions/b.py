def square(a: float, b: float) -> float:
    return a ** b

a, b = map(float, input().split())
print(square(a, b)) 