def alarm_clock(day, vacation):
    weekdays = [1, 2, 3, 4, 5]
    if vacation and day in weekdays:
        return "10:00"
    if vacation:
        return "off"
    if day in weekdays:
        return "7:00"
    return "10:00"
