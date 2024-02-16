"""
 '.'은 빈 칸을 의미하고, '#'은 공이 이동할 수 없는 장애물 또는 벽을 의미하며, 'O'는 구멍의 위치를 의미한다. 'R'은 빨간 구슬의 위치, 'B'는 파란 구슬의 위치이다.
"""
from collections import deque

def distance(x1, y1, x2, y2):
  return abs(x1-x2)+abs(y1-y2)

def solution(n, m, rx, ry, bx, by, board):
  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 0]
  q = deque([(rx, ry, bx, by)])
  visited = [(rx, ry, bx, by)]
  cnt = 0

  while q:
    for i in range(4):
      if cnt > 10:
        return -1
      if board[rx][ry] == "O":
        return cnt
      
      nrx, nry, nbx, nby = rx, ry, bx, by

      # move red
      while True:
        nrx += dx[i]
        nry += dy[i]

        if board[nrx][nry] == "#":
          nrx -= dx[i]
          nry -= dy[i]
          break

        if board[nrx][nry] == "O":
          break

      # move blue
      while True:
        nbx += dx[i]
        nby += dy[i]

        if board[nbx][nby] == "#":
          nbx -= dx[i]
          nby -= dy[i]
          break

        if board[nbx][nby] == "O":
          break

      # blue succeed
      if board[nbx][nby] == "O":
        continue
      
      # overlapped
      if nrx==nbx and nry==nby:
        if distance(rx, ry, nrx, nry) > distance(bx, by, nbx, nby):
          nbx -= dx[i]
          nby -= dy[i]
        else:
          nrx -= dx[i]
          nry -= dy[i]

      if (nrx, nry, nbx, nby) not in visited:
        q.append((nrx, nry, nbx, nby))
        visited.append((nrx, nry, nbx, nby))
    

  return n, m, rx, ry, bx, by, board

n, m = list(map(int, input().split()))
board = []
for i in range(n):
  board.append(input())
  for j in range(m):
    if board[i][j]=="R":
      rx, ry = i, j
    elif board[i][j]=="B":
      bx, by = i, j
print(solution(n, m, rx, ry, bx, by, board))