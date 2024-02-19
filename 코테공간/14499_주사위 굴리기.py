
def roll(dice, cmd):
    a, b, c, d, e, f = dice
    return [1, d, e, f, a, b]
def solution(n, m, x, y, k, board, cmds):
    dice = [0, 0, 0, 0, 0, 0]
    for cmd in cmds:
        dice = roll(dice, cmd)
        print(dice)

n, m, x, y, k = list(map(int, input().split()))
board = []
for _ in range(n):
    board.append(list(map(int, input().split())))
cmds = list(map(int, input().split()))

print(solution(n, m, x, y, k, board, cmds))