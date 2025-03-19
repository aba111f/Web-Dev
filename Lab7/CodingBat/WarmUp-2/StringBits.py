def string_bits(str):
    newstr = ""
    for id, val in enumerate(str):
        if (id + 1) % 2 != 0:
            newstr += val
        
    return newstr

print(string_bits('Heeololeo'))
