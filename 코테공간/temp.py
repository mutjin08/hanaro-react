def solution(depth, total):
    if depth == n:
        answer[0] = min(answer[0], total)
        answer[1] = max(answer[1], total)
        return
    
    for i in range(4):
        if ops[i]<=0:
            continue

        ops[i] -= 1
        if i==0:
            solution(depth+1, total+a[depth])
        elif i==1:
            solution(depth+1, total-a[depth])
        elif i==2:
            solution(depth+1, total*a[depth])
        elif i==3:
            solution(depth+1, int(total/a[depth]))
        ops[i] += 1

n = int(input())
a = list(map(int, input().split()))
ops = list(map(int, input().split()))

answer = [1e9, -1e9]
solution(1, 0)
print(answer)