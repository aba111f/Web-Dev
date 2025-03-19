def sum2(nums):
    if len(nums) < 1:
        return 0
    sum = 0
    for i in range(len(nums)):
        if i == 2:
            break
        sum += nums[i]
    return sum
