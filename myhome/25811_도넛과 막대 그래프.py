def inout(edges):
    graph = {}
    for a, b in edges:
        if a not in graph:
            graph[a] = [0, 0]
        if b not in graph:
            graph[b] = [0, 0]
        # a -> b
        graph[a][1] += 1 #out
        graph[b][0] += 1 #in
    return graph
        
        

def solution(edges):
    # 생성한 정점의 번호, 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수
    answer = [0, 0, 0, 0]
    graph = inout(edges)
    for node in graph:
        inCnt, outCnt = graph[node]
        if inCnt == 0 and outCnt >= 2:
            answer[0] = node
            x = node
        elif inCnt >= 1 and outCnt == 0:
            answer[2] += 1
        elif inCnt >=2 and outCnt>=2:
            answer[3] += 1
    answer[1] = graph[x][1] - answer[2] - answer[3]
    return answer