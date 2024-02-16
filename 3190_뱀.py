from collections import deque
def solution(n, k, l, graph, commands):
  dx = [0, 1, 0, -1]
  dy = [1, 0, -1, 0]

  commands.sort(key = lambda x : x[0])
  q = deque(commands)
  dir = 0

  while q:
    x, c = q.popleft()
    if c=='L':
      dir -= 1
      if dir < 0:
        dir += 4
    elif c=="D":
      dir += 1
      if dir>3:
        dir -= 4
    print("!!!!!!",c, dir)

n = int(input())
k = int(input())
graph = [[0 for _ in range(n)] for _ in range(n)]

for _ in range(k):
  x, y = list(map(int, input().split()))
  graph[x-1][y-1] = 1

l = int(input())
commands = []
for _ in range(l):
  x, c = input().split()
  commands.append([int(x), c])

print(solution(n, k, l, graph, commands))