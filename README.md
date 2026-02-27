# 🚀 Task Manager

Aplicação web moderna para gerenciamento de tarefas, desenvolvida com
**FastAPI**, **PostgreSQL**, **Docker** e interface responsiva com
**Bootstrap 5**.

------------------------------------------------------------------------

## 📌 Sobre o Projeto

O **Task Manager** é uma aplicação fullstack que permite:

-   ✅ Criar tarefas
-   ✏️ Atualizar status (concluída/pendente)
-   🗑️ Excluir tarefas com confirmação elegante (SweetAlert2)
-   🔄 Atualização dinâmica sem recarregar a página (Fetch API)
-   🎨 Interface moderna e responsiva

Projeto desenvolvido com foco em boas práticas REST, organização de
código e deploy profissional.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

### Backend

-   FastAPI
-   SQLAlchemy
-   PostgreSQL (produção)
-   SQLite (desenvolvimento opcional)
-   Pydantic

### Frontend

-   HTML5
-   Bootstrap 5
-   Bootstrap Icons
-   SweetAlert2
-   JavaScript (Fetch API)

### Infraestrutura

-   Docker
-   Docker Compose
-   Ambiente Dev/Prod alinhado com PostgreSQL

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    task-manager/
    │
    ├── app/
    │   ├── models.py
    │   ├── schemas.py
    │   ├── database.py
    │   ├── routers/
    │   └── main.py
    │
    ├── static/
    │   ├── css/
    │   └── js/
    |
    ├── templates/
    │   └── index.html
    │
    ├── Dockerfile
    ├── docker-compose.yml
    └── README.md

------------------------------------------------------------------------

## ⚙️ Como Rodar o Projeto

### 🔹 1. Clone o repositório

    git clone https://github.com/ceagamartins/task-manager.git
    cd task-manager

------------------------------------------------------------------------

### 🔹 2. Rodando com Docker (Recomendado)

    docker compose up --build

Acesse:

    http://localhost:8000

------------------------------------------------------------------------

### 🔹 3. Rodando sem Docker

Crie ambiente virtual:

    python -m venv venv
    source venv/bin/activate  # Linux/macOS
    venv\Scripts\activate   # Windows

Instale dependências:

    pip install -r requirements.txt

Execute:

    uvicorn app.main:app --reload

------------------------------------------------------------------------

## 🔥 Funcionalidades Modernas

-   Delete com confirmação elegante (SweetAlert2)
-   Toast de sucesso
-   Animação fade-out ao excluir tarefa
-   Atualização dinâmica via Fetch API
-   API REST seguindo boas práticas (status codes corretos)

------------------------------------------------------------------------

## 🌎 Deploy

Projeto preparado para deploy em:

-   Render
-   Railway
-   Fly.io
-   VPS com Docker

------------------------------------------------------------------------

## 📈 Próximas Melhorias

-   [ ] Autenticação com JWT
-   [ ] Filtro por status
-   [ ] Paginação
-   [ ] Edição inline
-   [ ] Dark Mode
-   [ ] Transformar em PWA

------------------------------------------------------------------------

## 👨‍💻 Autor

Desenvolvido por **Christian Martins**