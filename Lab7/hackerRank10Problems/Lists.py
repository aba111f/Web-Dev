
N = int(input())
arr = []
com: str = []
res = []
for i in range(N):
    com = input().split()
    if com[0] == "print":
        string = str(arr)
        res.append(string)
    elif com[0] == "insert":
        arr.insert(int(com[1]), int(com[2]))
    elif com[0] == "remove":
        arr.remove(int(com[1]))
    elif com[0] == "pop":
        arr.pop()
    elif com[0] == "append":
        arr.append(int(com[1]))
    elif com[0] == "sort":
        arr.sort()
    elif com[0] == "reverse":
        arr.reverse()
for arr in res:
    print(arr)