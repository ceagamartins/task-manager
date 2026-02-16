from pydantic import BaseModel

class Tarefa(BaseModel):
    titulo: str
    descricao: str
    concluida: bool