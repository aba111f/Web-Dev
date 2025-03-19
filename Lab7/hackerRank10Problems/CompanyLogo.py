# def comparator(letters):
#     for key, value in letters.items():
#         x = value
    

# def comp(string):
#     letters = {}
#     for item in string:
#         if item in letters:
#             val = letters[item] + 1
#             letters[item] = val
#         else:
#             letters[item] = 1
#     sLetters = sorted(letters, key=)
#     for id, key in enumerate(sLetters):
#         # if id == 3:
#         #     break
#         print(key, letters[key])

# if __name__ == "__main__":
#     s = input()
#     comp(s)
from collections import Counter
if __name__ == '__main__':
    sorted_items = sorted(Counter(input()).items(), key=lambda x: (-x[1], x[0]))
    [print(*x) for x in sorted_items[0:3]]