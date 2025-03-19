n, m = map(int, input().split())

arr = list(map(int, input().split()))
happiness = 0


setA = set(map(int, input().split()))
setB = set(map(int, input().split()))

happiness = sum(1 if elem in setA else -1 if elem in setB else 0 for elem in arr)

print(happiness)
