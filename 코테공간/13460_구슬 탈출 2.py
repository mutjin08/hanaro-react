from collections import deque

def distance(x1, y1, x2, y2):
    return abs(x1-x2)+abs(y1-y2)

def solution(n, m, board, rx, ry, bx, by):
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    q = deque([(rx, ry, bx, by)])
    visited = [(rx, ry, bx, by)]

    count = 0
    while q:
        rx, ry, bx, by = q.popleft()
        # failed after 10
        if count > 10:
            return -1
        
        # red succeed
        if board[rx][ry] == "O":
            return count

        for i in range(4):

            # red
            nrx, nry = rx, ry
            while True:
                nrx += dx[i]
                nry += dy[i]

                if graph[nrx][nry] == "#":
                    nrx -= dx[i]
                    nry -= dy[i]
                    break
                elif graph[nrx][nry] == "O":
                    break

            # blue
            nbx, nby = bx, by
            while True:
                nbx += dx[i]
                nby += dy[i]

                if graph[nbx][nby] == "#":
                    nbx -= dx[i]
                    nby -= dy[i]
                    break
                elif graph[nbx][nby] == "O":
                    break

            # blue succeed
            if graph[nbx][nby] == "O":
                continue

            # overlapped
            if (nrx, nry) == (nbx, nby):
                if distance(rx, ry, nrx, nry) > distance(bx, by, nbx, nby):
                    nrx -= dx[i]
                    nry -= dy[i]
                else:
                    nbx -= dx[i]
                    nby -= dy[i]

            if (nrx, nry, nbx, nby) not in visited:
                q. append((nrx, nry, nbx, nby))
                visited.append((nrx, nry, nbx, nby))
        count += 1
    # failed before 10
    return -1


n, m = list(map(int, input().split()))
board = []
for i in range(n):
    board.append(input())
    for j in range(m):
        if board[i][j] == "R":
            rx, ry = i, j
        elif board[i][j] == "B":
            bx, by = i, j
print(solution(n, m, board, rx, ry, bx, by))