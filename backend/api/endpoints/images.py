import httpx
from fastapi import APIRouter, Query
from core.config import settings

router = APIRouter()

@router.get("/")
async def get_images(query: str, page: int = 1):
    url = f"https://api.pexels.com/v1/search?query={query}&page={page}"
    headers = {"Authorization": settings.pexels_api_key}
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        return response.json()