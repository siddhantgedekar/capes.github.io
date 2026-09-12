import os
file = 'demo.txt'

try:
    f = open(file, "r")
    with open(file, "r") as f:
        modify = ""
        data = f.read()
        for word in data:
            if word.endswith("."):
                modify += "\n"
            else:
                modify += word
        print(modify)
        with open(file, 'w') as f:
            f.write(modify)
except:
    print("Something bad happened.")