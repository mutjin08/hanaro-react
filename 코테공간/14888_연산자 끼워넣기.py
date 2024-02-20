def solution(depth, total, left):
    if depth == n:
        answer[0] = min(answer[0], total)
        answer[1] = max(answer[1], total)
        return

    for i in range(4):
        if left[i]<=0:
            continue
        
        left[i] -= 1
        if i==0:
            solution(depth+1, total+a[depth], left)
        elif i==1:
            solution(depth+1, total-a[depth], left)
        elif i==2:
            solution(depth+1, total*a[depth], left)
        elif i==3:
            solution(depth+1, int(total/a[depth]), left)
        left[i] += 1

n = int(input())
a = list(map(int, input().split()))
op = list(map(int, input().split()))

answer = [10e9, -10e9] #minmax
solution(1, a[0], [op[0],op[1],op[2],op[3]])

print(answer[1])
print(answer[0])