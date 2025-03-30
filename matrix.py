first_multiple_input = input().rstrip().split()

n = int(first_multiple_input[0])

m = int(first_multiple_input[1])

matrix = []

for _ in range(n):
    matrix_item = input()
    matrix.append(matrix_item)

newstr = ""

for i in range(m):
    for string in matrix:
        newstr += string[i]

    

print(newstr)
i = len(newstr) - 1

while not newstr[i].isalpha():
    print(newstr[i], i)

    i -= 1

j = 0
temp = ''
notalpha = 0
space = ''
while j < i:
    while newstr[j].isalpha():
        temp += newstr[j]
        # print(temp)
        j += 1
    temp += ' '
    j += 1
# print(temp)

k = 0
end = len(temp)
temp1 = temp
while k < end:
    while k < end or temp1[k] != ' ':
        k += 1
        print(k, end)
    print(temp1[k])
    


