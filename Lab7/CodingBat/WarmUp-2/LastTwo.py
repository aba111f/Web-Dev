def last2(str):
    search = str[-2:]
    i = 0 
    count = 0
    while i < len(str):
        if str[i:2 + i] == search:
            count += 1
        i+=1
    if not count:
        return count
    return count - 1

print(last2("hixxhi"))
