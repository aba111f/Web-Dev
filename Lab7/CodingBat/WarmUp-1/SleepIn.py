def sleep_in(weekday, vacation):
    if not weekday or vacation:
        return True
    return False

print(sleep_in(True, False))