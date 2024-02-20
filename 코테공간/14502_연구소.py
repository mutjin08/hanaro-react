# 0은 빈 칸, 1은 벽, 2는 바이러스

def bfs(n, m, board):
    visited = [[for ]]
    for x in range(board):
        for y in range(board):

def solution(n, m, board, cnt):
    if cnt == 3:
        return bfs(n, m, board)
    for x in range(n):
        for y in range(m):
            if board[x][y] == 0:
                board[x][y] = 1
                solution(n, m, board, cnt+1)
                board[x][y] = 0

n, m = list(map(int, input().split()))
board = []
for _ in range(n):
    board.append(list(map(int, input().split())))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
print(solution(n, m, board, 0))