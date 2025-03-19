n = int(input())
res = []

def checkConsequitiveNums(string: str, hasHyphen: bool):
    count = 1
    j = 1
    i = 0
    if hasHyphen:
        size = 19
    else:
        size = 16
    if(len(string) == size):
        while i < len(string) and j < len(string):
            if string[i] == '-':
                i += 1
                j = i + 1
                continue
            if string[j] == '-':
                j += 1
                continue

            if string[i] == string[j]:
                j += 1
                count += 1
                if count > 3:
                    return False
            else:
                i += 1
                j = i + 1
                count = 1
        return True
    return False
    
    
    

def checkForValid(string: str):
    isValid = False
    countHyphen = 0
    if string[0] == '4' or string[0] == '5' or string[0] == '6':
        for i in range(4, len(string), 5):
            if string[i] == '-':
                countHyphen += 1
        if countHyphen == 3 and len(string) - 3 == 16:
            isValid = checkConsequitiveNums(s, True)
            return isValid
        if countHyphen == 0:
            # print("VISISTED")
            isValid = checkConsequitiveNums(s, False)
            return isValid
    
    return isValid
        


    
    


for i in range(n):
    s = input()
    
    if checkForValid(s):
        res.append("Valid")
    else:
        res.append("Invalid")

for item in res:
    print(item)