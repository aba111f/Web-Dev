def count_evens(nums):
    count = 0
    for elem in nums:
        if elem % 2 == 0:
            count += 1
    return count