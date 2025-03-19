def no_teen_sum(a, b, c):
    sum = 0
    if 13 <= a <= 19:
        if helper(a):
            sum += a
    else:
        sum += a
    if 13 <= b <= 19:
        if helper(b):
            sum += b
    else: 
        sum += b
    if 13 <= c <= 19:
        if helper(c):
            sum += c
    else: 
        sum += c
    
    return sum
    


def helper(n):
    if n == 15 or n == 16:
        return True
    return False