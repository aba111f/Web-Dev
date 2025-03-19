def array_front9(nums):
    for i in range(len(nums)):
        if i == 4:
            break
        if nums[i] == 9:
            return True
    return False

        
