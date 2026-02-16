from pydantic import BaseModel

class TarefaCreate(BaseModel):
    titulo: str
    descricao: str
    concluida: bool

class TarefaResponse(TarefaCreate):
    id: int

    class Config:
        from_attributes = True