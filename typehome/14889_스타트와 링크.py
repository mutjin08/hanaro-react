from itertools import combinations
def get_score(s, team):
    score = 0
    for i, j in combinations(team, 2):
        score += s[i][j] + s[j][i]
    return score

def solution(n, s):
    answer = sum(map(sum, s))
    for starts in combinations(range(n), n//2):
        links = [i for i in range(n) if i not in starts]
        startScore = get_score(s, starts)
        linkScore = get_score(s, links)
        answer = min(answer, abs(startScore-linkScore))
    return answer

n = int(input())
s = []
for _ in range(n):
    s.append(list(map(int, input().split())))
print(solution(n, s))
