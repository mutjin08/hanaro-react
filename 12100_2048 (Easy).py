import copy

def left(board, n):
  for i in range(n):
    cursor = 0
    for j in range(1, n):
      if board[i][j]!=0:
        temp = board[i][j]
        board[i][j] = 0

        if board[i][cursor]==0:
          board[i][cursor] = temp
        elif board[i][cursor]==temp:
          board[i][cursor] *= 2
          cursor += 1
        else:
          cursor += 1
          board[i][cursor] = temp

  return board

def right(board):
  for i in range(n):
    cursor = n-1
    for j in range(n-1, -1, -1):
      if board[i][j]!=0:
        temp = board[i][j]
        board[i][j] = 0

        if board[i][cursor] == 0:
          board[i][cursor] = temp
        elif board[i][cursor] == temp:
          board[i][cursor] *= 2
          cursor -= 1
        else:
          cursor -= 1
          board[i][cursor] = temp
  return board


def dfs(stage, board, n):
  global answer

  if stage==5:
    for i in range(n):
      for j in range(n):
        answer = max(board[i][j], answer)
    return
  
  dfs(stage+1, left(board, n))
  dfs(stage+1, right(board, n))
  dfs(stage+1, up(board, n))
  dfs(stage+1, down(board, n))


n = int(input())
board = []
answer = 0
for _ in range(n):
  board.append(list(map(int, input().split())))
dfs(0, board, n)
print(answer)