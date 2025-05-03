from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os
from typing import List, Optional
from datetime import datetime

# Create FastAPI app
app = FastAPI(
    title="ShowCase API",
    description="API for the ShowCase platform - helping youth athletes track, earn, and share their sports journey",
    version="0.1.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class HealthCheck(BaseModel):
    status: str
    version: str
    timestamp: datetime

class ActivityBase(BaseModel):
    title: str
    type: str
    location: str
    date: datetime
    duration_minutes: int
    description: Optional[str] = None
    is_verified: bool = False

class ActivityCreate(ActivityBase):
    pass

class Activity(ActivityBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

# Routes
@app.get("/", response_model=HealthCheck)
async def health_check():
    """
    Health check endpoint to verify the API is running.
    """
    return {
        "status": "healthy",
        "version": app.version,
        "timestamp": datetime.now(),
    }

@app.get("/api/activities", response_model=List[Activity])
async def get_activities():
    """
    Get a list of activities (placeholder).
    """
    # This is a placeholder - in a real implementation, this would fetch from the database
    return [
        {
            "id": 1,
            "title": "Hockey Practice",
            "type": "practice",
            "location": "Ice Palace Arena",
            "date": datetime.now(),
            "duration_minutes": 90,
            "description": "Team practice focusing on power play drills",
            "is_verified": True,
            "created_at": datetime.now(),
            "updated_at": datetime.now(),
        }
    ]

@app.post("/api/activities", response_model=Activity, status_code=status.HTTP_201_CREATED)
async def create_activity(activity: ActivityCreate):
    """
    Create a new activity (placeholder).
    """
    # This is a placeholder - in a real implementation, this would save to the database
    return {
        "id": 2,
        "title": activity.title,
        "type": activity.type,
        "location": activity.location,
        "date": activity.date,
        "duration_minutes": activity.duration_minutes,
        "description": activity.description,
        "is_verified": activity.is_verified,
        "created_at": datetime.now(),
        "updated_at": datetime.now(),
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
