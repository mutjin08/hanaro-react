def dfs(x, y, cnt, total, n, m):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    global answer

    if answer >= total + max_val * (3-cnt):
        return

    if cnt == 3:
        answer = max(answer, total)
        return
    
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if not (0<=nx<n and 0<=ny<m):
            return
        
        if visited[nx][ny]:
            return
        
        if cnt == 1:
            visited[nx][ny] = 1
            dfs(x, y, cnt+1, total+board[nx][ny], n, m)
            visited[nx][ny] = 0

        visited[nx][ny] = 1
        dfs(nx, ny, cnt+1, total+board[nx][ny], n, m)
        visited[nx][ny] = 0

def solution(n, m, board, visited):
    for x in range(n):
        for y in range(m):
            visited[x][y] = 1
            dfs(x, y, 0, board[x][y], n, m)
            visited[x][y] = 0


n, m = list(map(int, input().split()))
board = []
for _ in range(n):
    board.append(list(map(int, input().split())))
visited = [[0 for _ in range(m)] for _ in range(n)]

answer = 0
max_val = max(map(max, board))

solution(n, m, board, visited)
print(answer)