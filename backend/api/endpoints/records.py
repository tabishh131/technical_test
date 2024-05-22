from fastapi import APIRouter, Query
from typing import List

from models.record import Record
from core.database import load_records

router = APIRouter()

records = load_records()

@router.get("/", response_model=List[Record])
def get_records(query: str = Query(None)):
    if query:
        return [record for record in records if query.lower() in record.title.lower() or query.lower() in record.notes.lower()]
    return records

