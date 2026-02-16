from fastapi import APIRouter
from models import Tarefa

router = APIRouter()

@router.get("/tarefas/{tarefa_id}")
def buscar_tarefa(tarefa_id: int):
    return {"tarefa_id": tarefa_id}

@router.post("/tarefas")
def criar_tarefa(tarefa: Tarefa):
    return{
        "mensagem": "Tarefa criada com sucesso",
        "dados": tarefa
    }