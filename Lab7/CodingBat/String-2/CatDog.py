def cat_dog(str):
    CatCount = 0
    DogCount = 0
    for i in range(len(str)):
        if str[i:3+i] < 3:
            continue
        if str[i:3+i] == 'cat':
            CatCount += 1
        elif str[i:3+i] == 'dog':
            DogCount += 1
    if CatCount == DogCount:
        return True
    else: 
        return False
