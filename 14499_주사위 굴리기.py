def roll_dice():
  

def solution(n, m, x, y, k, graph, cmds):
  dx = [0, 0, 1, -1]
  dy = [1, -1, 0, 0]

  for cmd in cmds:
    x += dx[cmd]
    y += dy[cmd]

n, m, x, y, k = list(map(int, input().split()))
graph = []
for _ in range(n):
  graph.append(list(map(int, input().split())))
cmds = [i-1 for i in list(map(int, input().split()))]
print(solution(n, m, x, y, k, graph, cmds))