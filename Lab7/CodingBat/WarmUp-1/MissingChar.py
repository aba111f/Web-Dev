def missing_char(str, n):
    newstr = ""
    for index, char in enumerate(str):
        if index == n:
            continue
        newstr += char
    return newstr

