def string_match(a, b):
    count = 0
    size = 0
    if len(a) > len(b):
        size = len(b)
    else: 
        size = len(a)
    for i in range(size):
        if len(b[i:2+i]) < 2 or len(a[i:2+i]) < 2:
            continue
        if a[i:2+i] == b[i:2+i]:
            # print(a[i:2+i], b[i:2+i])
            count += 1
    return count

print(string_match('abc', 'axc'))