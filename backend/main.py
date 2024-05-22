from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.endpoints import records, images, grid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(records.router, prefix="/records", tags=["records"])
app.include_router(images.router, prefix="/images", tags=["images"])
app.include_router(grid.router, prefix="/grid", tags=["grid"])

@app.get("/")
def read_root():
    return {"message": "Hello World"}
