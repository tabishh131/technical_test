import json
from typing import List
from pathlib import Path

from models.record import Record

DATA_FILE = Path(__file__).parent.parent / "data" / "records.json"

def load_records() -> List[Record]:
    with open(DATA_FILE, "r") as f:
        records_data = json.load(f)
    return [Record(**record) for record in records_data]
