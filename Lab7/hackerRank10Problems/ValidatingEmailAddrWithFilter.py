import re

def fun(email):
    userNamePattern = r"([a-zA-Z0-9-_]+)"
    websiteNamePattern = r"([a-zA-Z0-9]+)"
    extensionPattern = r"([a-zA-Z]{1,3})"

    pattern = rf"^{userNamePattern}\@{websiteNamePattern}\.{extensionPattern}&"

    return bool(re.search(pattern, email))



def filter_mail(emails):
    return list(filter(fun, emails))

if __name__ == '__main__':
    n = int(input())
    emails = []
    for _ in range(n):
        emails.append(input())

filtered_emails = filter_mail(emails)
filtered_emails.sort()
print(filtered_emails)