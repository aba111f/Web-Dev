def make_chocolate(small, big, goal):
    if big * 5 + small == goal:
        return small
    elif big * 5 + small < goal:
        return -1
    if small == goal:
        return small
    need = goal % 5
    if small >= need:
        return need
    return -1
