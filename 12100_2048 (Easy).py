from collections import deque
def solution(cnt, board):
  
  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

  q = deque([])
  while q:
    for i in range(4):


n = int(input())
board = []
for _ in range(n):
  board.append(list(map(int, input().split())))
print(solution(n, board))