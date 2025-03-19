
def sum67(nums):
    if len(nums) < 1:
        return 0
    sum2 = 0
    i = 0
    j = 0
    hasSeven = False
    sumG = sum(nums)
    res = 0
    while i < len(nums):
        if nums[i] == 6:
            sum2 += nums[i]
            j = i
            while j <= len(nums) and nums[j] != 7:
                sum2 += nums[j + 1]
                if nums[j + 1] == 7:
                    hasSeven = True
                    break
                
                
                j += 1
            i = j + 1
        if hasSeven:
            res +=  (sum2)
            sum2 = 0


        i += 1
    if hasSeven:
        return abs(sumG - res)
    else:
        return sumG

print(sum67([6, 7, 1, 6, 7, 7]))
    

