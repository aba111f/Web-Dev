def count_hi(str):
    count = 0
    for i in range(len(str)):
        if str[i:2+i] < 2:
            continue
        if str[i:2+i] == 'hi':
            count += 1
    return count
    
