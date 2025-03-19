def string_splosion(str):
    newstr = ""
    res = ""
    for val in str:
        newstr += val
        res += newstr
    return res

