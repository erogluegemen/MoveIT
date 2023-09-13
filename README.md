# MoveIT

Prevent your system from going into a sleep or away state in applications like Skype or Teams by simulating mouse movement.
<br>
(With less than 30 lines of code..)
<br><br>
![MOVEIT!!!](https://github.com/erogluegemen/MoveIT/assets/30879498/2e6736b9-7bd8-4bb7-b6c3-72c42e038de6)


## Introduction

This Python script is designed to keep your system awake and prevent it from entering sleep or away states in applications like Skype or Teams. It achieves this by simulating mouse movement at regular intervals.

### Supported Operating Systems:

- Windows ✅
- macOS   ✅
- Linux   ✅

### How It Works

The script constantly monitors the mouse cursor's position. If it detects that the mouse hasn't moved for a specified duration (default is 4 minutes), it simulates a small mouse movement to prevent your system from going into an idle state.

## Getting Started

### Prerequisites

- Python 3.6 or higher
- `pyautogui` library (install it with `pip install pyautogui`)
- `pyinstaller` library (install it with `pip install pyinstaller`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/erogluegemen/MoveIT.git
   ```

2. Convert script file to exe:

   ```bash
   pyinstaller --onefile move_it_move_it.py
   ```
   
<p>After this step, a new folder called <b>'dist'</b> is created in the directory. The dist folder contains the file to be executed.</p>

## Contributors
[@Koray Ay](https://github.com/korayay) <br>
[@Egemen Eroglu](https://github.com/erogluegemen)

