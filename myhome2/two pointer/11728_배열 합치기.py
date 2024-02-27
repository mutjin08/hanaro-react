def solution(n, m, a, b):
    answer = []
    p, q = 0, 0
    while p<n and q<m:
        if a[p] < b[q]:
            answer.append(a[p])
            p += 1
        else:
            answer.append(b[q])
            q += 1
    while p<n:
        answer.append(a[p])
        p += 1
    while q<m:
        answer.append(b[q])
        q += 1
    return answer

n, m = list(map(int, input().split()))
a = list(map(int, input().split()))
b = list(map(int, input().split()))

print(*solution(n, m, a, b))