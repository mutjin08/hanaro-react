def solution(n, s):

n = int(input())
s = []
for _ in range(n):
    s.append(list(map(int, input().split())))
print(solution(n, s))
