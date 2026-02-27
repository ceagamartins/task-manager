async function carregarTarefas() {
    const response = await fetch("/tarefas");
    const tarefas = await response.json();

    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach(t => {
        lista.innerHTML += `
        <li id="tarefa-${t.id}" class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 ${t.concluida ? 'tarefa-concluida' : ''}">
            
            <div class="d-flex align-items-start gap-2 w-100">
                <input type="checkbox" 
                       class="form-check-input mt-1"
                       ${t.concluida ? 'checked' : ''}
                       onchange="toggleStatus(${t.id})">

                <div>
                    <strong>${t.titulo}</strong><br>
                    <small class="text-muted">${t.descricao}</small>
                </div>
            </div>

            <div class="d-flex align-items-center gap-2">
                <span class="badge ${t.concluida ? 'badge-concluida' : 'badge-pendente'}">
                    ${t.concluida ? 'Concluída' : 'Pendente'}
                </span>

                <button class="btn btn-sm btn-outline-danger"
                        onclick="confirmarDelete(${t.id}, '${t.titulo}')">
                    <i class="bi bi-trash"></i>
                </button>
            </div>

        </li>
        `;
    });
}

async function toggleStatus(id) {
    await fetch(`/tarefas/${id}`, { method: "PATCH" });
    carregarTarefas();
}

async function confirmarDelete(id, titulo) {

    const result = await Swal.fire({
        title: "Tem certeza?",
        text: `Deseja realmente excluir "${titulo}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar"
    });

    if (result.isConfirmed) {
        deletarTarefa(id);
    }
}

async function deletarTarefa(id) {

    const response = await fetch(`/tarefas/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const elemento = document.getElementById(`tarefa-${id}`);
        elemento.classList.add("fade-out");

        setTimeout(() => {
            elemento.remove();
        }, 400);

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Tarefa excluída com sucesso",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    }
}

document.getElementById("formTarefa").addEventListener("submit", async function (e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;

    await fetch("/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            concluida: false
        })
    });

    this.reset();
    bootstrap.Modal.getInstance(document.getElementById("modalTarefa")).hide();
    carregarTarefas();
});

carregarTarefas();