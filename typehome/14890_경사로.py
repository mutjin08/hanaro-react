def can_pass(n, l, road):
    if road[0] == road[-1]:
        if road.count(road[0]) == n:
            return 1
        return 0
    elif road[0] > road[-1]:
        # down
        cnt = l
        for i in range(1, n):
            if road[i] - road[i-1] == 0:
                continue
            elif road[i] - road[i-1] == 1:
                if cnt > 0:
                    return 0
                cnt -= 1
            else:
                return 0
            
    elif road[0] < road[-1]:

def solution(n, l, maps):
    answer = 0
    for case in zip(*maps):
        answer += can_pass(n, l, list(case))
    for case in maps:
        answer += can_pass(n, l, case)
    return answer



n, l = list(map(int, input().split()))
maps = []
for _ in range(n):
    maps.append(list(map(int, input().split())))
print(solution(n, l, maps))