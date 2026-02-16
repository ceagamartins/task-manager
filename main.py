from fastapi import FastAPI
from routers import tarefas

app = FastAPI()

@app.get("/")
def read_root():
    return{"message": "Minha API está organizada"}

@app.get("/status")
def status():
    return {"status": "API online"}