def count_code(str):
    count = 0
    for i in range(len(str)):
        if str[i:4+i] < 4:
            continue
        newstr = str[i:4+i]
        if newstr[:2] == 'co' and newstr[-1] == 'e':
            count += 1
    return count
