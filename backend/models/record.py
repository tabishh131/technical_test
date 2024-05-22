from pydantic import BaseModel

class Record(BaseModel):
    id: int
    title: str
    notes: str
    status: str