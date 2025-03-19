# Not solved 
def Compress(string: str):
    pair = ()
    count = 0
    newstr = ""
    for i in range(1, len(string)):
        if string[i - 1] == string[i]:
            newstr += string[i - 1]
            if i == len(string) - 1:
                newstr += string[i]
                pair = len(newstr), int(string[i - 1])
                print(pair, end=" ")
        else:
            newstr += string[i - 1]
            pair = len(newstr), int(string[i - 1])
            print(pair, end=" ")
            newstr = ""
            if i == len(string) - 1:
                newstr += string[i]
                pair = len(newstr), int(string[i - 1])
                print(pair, end=" ")
            
        
    
if __name__ == "__main__":
    s = input()
    Compress(s)
            
        


