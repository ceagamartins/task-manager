from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import engine
import models
from routers import tarefas

# Cria as tabelas no banco automaticamente
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configuração da pasta de templates
templates = Jinja2Templates(directory="templates")

# Inclui as rotas de tarefas (CRUD)
app.include_router(tarefas.router)

# Página principal (HTML)
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# Rota simples de status
@app.get("/status")
def status():
    return {"status": "API online"}
