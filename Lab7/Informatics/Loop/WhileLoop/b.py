num = int(input())
i = 2
while i < num:
    if num % i == 0:
        print(i)
        break
    i += 1