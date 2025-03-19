def not_string(str):
    words = str.split()
    if words[0] == 'not':
        return str
    else:
        return 'not ' + str
