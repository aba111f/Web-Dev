num = int(input())




words = input().split()

def score_words(words):
    vowels = "aeiuoy"
    sum = 0
    for item in words:
        count = 0
        for letter in item:
            if letter in vowels:
                count += 1
        if count % 2 == 0:
            sum += 2
        else:
            sum += 1  
    return sum

print(score_words(words))
