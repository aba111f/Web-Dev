def xyz_there(str):
    if len(str) == 3 and str == 'xyz':
        return True
    hasDot = False
    for i in range(len(str)):
        if str[i] == '.':
            hasDot = True
        if len(str[i:4+i]) < 4:
            continue
        newstr = str[i:4+i]

        if not hasDot and newstr[:3] == 'xyz':
            return True

        if newstr[0] != '.' and newstr[1:] == 'xyz':
            return True
    return False

print(xyz_there('1.xyz.xyz2.xyz'))