function addActivity() {
    const newActivity = prompt("Digite a nova atividade:");
    if (newActivity) {
        const activitiesList = document.querySelector('.activities-list ul');
        const newListItem = document.createElement('li');
        newListItem.textContent = `${newActivity} - Prazo: Em breve`;
        activitiesList.appendChild(newListItem);
        alert("Atividade adicionada com sucesso!");
    }
}

function createProject() {
    const newProject = prompt("Digite o nome do novo projeto:");
    if (newProject) {
        const projectList = document.querySelector('.project-list');
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h4>${newProject}</h4>
            <p>Descrição: Projeto criado recentemente.</p>
            <p>Progresso: 0%</p>
            <div class="progress-bar">
                <div class="progress" style="width: 0%;"></div>
            </div>
        `;
        projectList.appendChild(projectItem);
    }
}

function syncCalendar() {
    alert("Sincronizando com o calendário...");
    setTimeout(() => {
        alert("Sincronização concluída!");
    }, 1000);
}

function editProfile() {
    const newName = prompt("Digite o novo nome:");
    const newEmail = prompt("Digite o novo e-mail:");
    if (newName && newEmail) {
        document.querySelector('#profile-name').textContent = `Nome: ${newName}`;
        document.querySelector('#profile-email').textContent = `Email: ${newEmail}`;
        alert("Perfil atualizado com sucesso!");
    }
}
