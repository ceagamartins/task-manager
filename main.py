from fastapi import FastAPI
from database import engine
import models
from routers import tarefas

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(tarefas.router)

@app.get("/")
def read_root():
    return{"message": "API com banco funcionando"}