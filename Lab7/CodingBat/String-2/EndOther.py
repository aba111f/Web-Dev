def end_other(a, b):
    a = a.lower()
    b = b.lower()
    if len(a) == len(b):
        if a == b:
            return True
    if len(a) < len(b):
        size = len(a)
        
        if a[:size] == b[-size:]:
            return True
    else:
        size = len(b)
    
        if a[-size:] == b[:size]:
            return True
    
    return False

print(end_other('abc', 'abc'))