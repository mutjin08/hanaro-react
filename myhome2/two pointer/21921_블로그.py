def solution(n, x, logs):
    answer = [0, 0]
    s, e = 0, x
    while e<n:
        if logs[s] < logs[e]:
            s += 1
            e += 1
n, x = list(map(int, input().split()))
logs = list(map(int, input().split()))
print(solution(n, x, logs))