from fastapi import APIRouter

api_router = APIRouter()

# Example endpoint (you can add more routes as needed)
@api_router.get("/health-check")
def health_check():
    return {"status": "ok"}
