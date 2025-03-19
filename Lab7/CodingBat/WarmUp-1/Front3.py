def front3(string):
    if len(string) == 3:
        return string*3
    string = string[:3]*3
    return string


print(front3('Java'))