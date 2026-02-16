from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return{"message": "Minha primeira API está funcionando"}

@app.get("/sobre")
def sobre():
    return {"autor": "Christian", "projeto": "Task Manager"}