def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)

def round10(n):
    if n % 10 >= 5:
        val = abs(n%10 - 10) + n
    else:
        val = abs(n%10 - n)
    return val
