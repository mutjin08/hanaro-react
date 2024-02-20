# 0은 빈 칸, 1은 벽, 2는 바이러스
import sys
input = sys.stdin.readline
from collections import deque
from copy import deepcopy

def count_target(board, n, m, target):
    answer = 0
    for x in range(n):
        for y in range(m):
            if board[x][y] == target:
                answer += 1
    return answer

def bfs(n, m, board, virus):
    q = deque(virus)
    nboard = deepcopy(board)
    
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if not (0<=nx<n and 0<=ny<m):
                continue
            
            if nboard[nx][ny] == 0:
                nboard[nx][ny] = 2
                q.append((nx, ny))

    return count_target(nboard, n, m, 0)

def solution(n, m, board, virus, cnt):
    if cnt == 3:
        global answer
        answer = max(answer, bfs(n, m, board, virus))
        return 
    for x in range(n):
        for y in range(m):
            if board[x][y] == 0:
                board[x][y] = 1
                solution(n, m, board, virus, cnt+1)
                board[x][y] = 0

def find_target(board, n, m, target):
    answer = []
    for x in range(n):
        for y in range(m):
            if board[x][y] == target:
                answer.append((x, y))
    return answer

n, m = list(map(int, input().split()))
board = []
for _ in range(n):
    board.append(list(map(int, input().split())))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
virus = find_target(board, n, m, 2)
answer = 0
solution(n, m, board, virus, 0)
print(answer)