def solution(n, a, b, c):
  a.sort()
  answer = 0

  for num in a:
    answer+=1
    if num <= b:
      continue
    answer += num//c
    if num%c!=0:
      answer += 1
  return answer
  


n = int(input())
a = list(map(int, input().split()))
b, c = list(map(int, input().split()))

print(solution(n, a, b, c))