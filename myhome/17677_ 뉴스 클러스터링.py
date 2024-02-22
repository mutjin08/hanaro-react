from collections import Counter

def parse(s):
    answer = []
    s = s.lower()
    for i in range(len(s)-1):
        if s[i].isalpha() and s[i+1].isalpha():
            answer.append(s[i] + s[i+1])
    return Counter(answer)
def solution(str1, str2):
    s1, s2 = parse(str1), parse(str2)
    a, b = len(list((s1&s2).elements())), len(list((s1|s2).elements()))
    
    if b==0:
        return 65536
    return int((a/b)*65536)
    
    