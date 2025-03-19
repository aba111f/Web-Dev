def distinc_words(num: int):
    words = {}
    times = 1
    for i in range(num):
        s = input()
        if s in words:
            val = words.get(s) + 1
            words[s] = val
        else:
            words[s] = times

    print(len(words))
    for value in words.values():
        print(value, end=" ")

if __name__ == '__main__':
    num = int(input())
    distinc_words(num)

