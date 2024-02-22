def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities)*5 #주의
    q = []
    answer = 0
    for c in cities:
        c = c.lower() #주의
        if c in q:
            q.remove(c)
            q.append(c)
            answer += 1
        else:
            if len(q) == cacheSize:
                q.pop(0)
            q.append(c)
            answer += 5
    return answer