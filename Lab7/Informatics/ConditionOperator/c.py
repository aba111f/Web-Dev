test = int(input())
shkolnik = int(input())

if test == 1 and shkolnik != 1:
    print("NO")
elif test == 1 and shkolnik == 1:
    print("YES")
elif test != 1 and shkolnik != 1:
    print("YES")
else: 
    print("NO")