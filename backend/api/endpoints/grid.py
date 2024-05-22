from fastapi import APIRouter, Request
import random

router = APIRouter()

# Initialize a 3x3 grid with random colors
grid_size = 3
initial_state = [[random.choice(["red", "blue"]) for _ in range(grid_size)] for _ in range(grid_size)]

@router.get("/")
def get_grid():
    return initial_state

@router.post("/")
async def update_grid(request: Request):
    data = await request.json()
    row, col = data['row'], data['col']
    
    current_color = initial_state[row][col]
    new_color = "red" if current_color == "blue" else "blue"

    # Update the clicked square color
    initial_state[row][col] = new_color

    # Update adjacent squares
    for neighbor_row, neighbor_col in [(row - 1, col), (row + 1, col), (row, col - 1), (row, col + 1)]:
        if 0 <= neighbor_row < grid_size and 0 <= neighbor_col < grid_size:
            initial_state[neighbor_row][neighbor_col] = current_color
    initial_state[row][col] = new_color

    return initial_state