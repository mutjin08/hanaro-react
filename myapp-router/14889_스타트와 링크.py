def solution(depth, cnt):
    if depth == n//2:
        start, link = 0, 0
        for i in range(n):
            for j in range(n):
                if visited[i] and visited[j]:
                    start += board[i][j]
                elif not visited[i] and not visited[j]:
                    link += board[i][j]
        global answer
        answer = min(answer, abs(start-link))
        return
    
    for i in range(cnt, n):
        if not visited[i]:
            visited[i] = 1
            solution(depth+1, cnt+1)
            visited[i] = 0


n = int(input())
board = list(map(int, input().split()))
visited = [0]*n
answer = 1e9
solution(0, 0)