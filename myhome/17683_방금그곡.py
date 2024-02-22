def play(time, note):
    if time <= len(note):
        return note[:time]
    return note*(time//len(note))+note[:(time%len(note))]

def parse_note(note):
    note = note.replace("C#", "P")
    note = note.replace("D#", "Q")
    note = note.replace("F#", "R")
    note = note.replace("G#", "S")
    note = note.replace("A#", "T")
    return note

def parse_time(raw_time):
    h, m = map(int, raw_time.split(":"))
    return h*60+m

def solution(m, musicinfos):
    m = parse_note(m)
    answer = [None, 0]
    for info in musicinfos:
        start, end, title, note = info.split(",")
        start, end = parse_time(start), parse_time(end)
        note = parse_note(note)
        
        log = play(end-start, note)
        if m in log and answer[1] < len(log):
            answer[0], answer[1] = title, len(log)
            
    return answer[0]