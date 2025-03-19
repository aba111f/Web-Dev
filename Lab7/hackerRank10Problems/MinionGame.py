

def minion_game(string):
    vowels = "AEIOUaeiou"

    stuartCount = 0
    kevinCount = 0



    for i in range(len(s)):
        if s[i] in vowels:
            # print("VOWELS")
            for j in range(i, len(s)):
                # print(s[i:j])
                kevinCount += 1
        else:
            # print("CONSONANTS")
            for j in range(i, len(s)):
                # print(s[i:j])
                stuartCount += 1

    if kevinCount > stuartCount:
        print(f"Kevin {kevinCount}")
    elif kevinCount < stuartCount:
        print(f"Stuart {stuartCount}")
    else: 
        print("Draw")


if __name__ == '__main__':
    s = input()
    minion_game(s)