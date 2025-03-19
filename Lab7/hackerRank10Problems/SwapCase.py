s = input()
def swap_case(s):
    ans: str = ""
    for letter in s:
        if not letter.isalpha():
            ans += letter
            continue
        if letter.islower():
            ans += letter.upper()
        else:
            ans += letter.lower()
    print(ans)

swap_case(s)
