import pyautogui
import time
import random

def move_mouse_randomly() -> None:
    current_x, current_y = pyautogui.position()

    low_b = -10
    upper_b = 10
    
    x_offset = random.randint(low_b, upper_b)
    y_offset = random.randint(low_b, upper_b)

    new_x = current_x + x_offset
    new_y = current_y + y_offset

    pyautogui.moveTo(new_x, new_y, duration=0.1)

if __name__ == "__main__":
    second = 60
    minute = 4
    previous_position = pyautogui.position()
    
    while True:
        current_position = pyautogui.position()
        
        if current_position != previous_position:
            previous_position = current_position
        else:
            move_mouse_randomly()
        time.sleep(minute * second)
