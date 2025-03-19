def sum13(nums):
    if len(nums) < 1:
        return 0
    sum = 0
    i = 0
    while i < len(nums):
        print(i)
        if nums[i] == 13:
            i += 2
            continue
        sum += nums[i]
        i += 1
    return sum

print(sum13([1, 2, 13, 2, 1, 13]))