import time

class Person:
    name = ""
    age = 0
    # b_time = time.now()
    food = 10
    def __init__(self, name = "", age = 0):
        self.name = name
        print(f"Congrulation!! For being born. You're crying!!")
    
    def cry(self):
        print(f"{self.name} is crying.")
    
    def hunger(self):
        if self.food <= 10:
            print(f"Currently low on food {self.food}")
        elif self.food in range(10, 51):
            print(f"{self.name} has enough food to travel 10km.")
        else:
            print(f"{self.name}'s energy is full.")