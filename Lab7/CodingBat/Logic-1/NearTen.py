def near_ten(num):
    if abs(10 - (num % 10)) >= 8 or abs(10 - (num % 10)) <= 2:
        return True
    return False

print(near_ten(19))