def front_back(str):
    if len(str) == 1:
        return str
    newstr = str[len(str) - 1]
    
    newstr += str[1:len(str) - 1]
    newstr += str[0]
    
    return newstr 
print(front_back('salam'))
