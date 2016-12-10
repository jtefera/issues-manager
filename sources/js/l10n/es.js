const basics = {
    'app.appName': 'Rastreador de problemas',
};

const issueForm = {
    'app.issueForm.title.label': 'Título',
    'app.issueForm.title.placeholder': 'título del asunto',
    'app.issueForm.priority.label': 'Prioridad',
    'app.issueForm.name.label': 'Tu nombre',
    'app.issueForm.name.placeholder': 'tu nombre',
    'app.issueForm.email.label': 'Correo electrónico',
    'app.issueForm.email.placeholder': 'correo electrónico',
    'app.issueForm.description.label': 'Descripción',
    'app.issueForm.description.placeholder': 'descrición detallada del asunto',
    'app.addIssue.form.title': 'Añadir Problema',
    'app.editIssue.form.title': 'Editar Problema',
};

const loginForm = {
    'app.loginForm.form.title': 'Iniciar Sesión',
    'app.loginForm.username.label': 'Nombre de usuario',
    'app.loginForm.username.placeholder': 'tu nombre de usuario',
    'app.loginForm.password.label': 'Contraseña',
    'app.loginForm.password.placeholder': 'tu contraseña',
};

const buttons = {
    'app.addIssue.button.label': 'Añadir problema',
    'app.cancel.button.label': 'Cancelar',
    'app.submit.button.label': 'Enviar',
    'app.logOut.button.label': 'Cerrar Sesión',
    'app.logIn.button.label': 'Iniciar Sesión',
};

const issue = {
    'app.issue.delete.button.label': 'Eliminar',
    'app.issue.edit.button.label': 'Editar',
};

const comment = {
    'app.comment.name.label': 'Nombre',
    'app.comment.name.placeholder': 'nombre',
    'app.comment.email.label': 'Correo electrónico',
    'app.comment.email.placeholder': 'correo electrónico',
    'app.comment.comment.label': 'Comentario',
    'app.comment.comment.placeholder': 'comentario',
    'app.comment.comment.button.label': 'Comentar',
};

const confirmDelete = {
    'app.confirmDelete.modal.title': '¿Eliminar el problema?',
    'app.confirmDelete.modal.description': '¿Seguro que quieres eliminar el problema?',
    'app.confirmDelete.delete.button.label': 'Eliminar',
};

const listIssues = {
    'app.listIssues.title': 'Prioridad {priority}',
};

export default {
    ...basics,
    ...issueForm,
    ...loginForm,
    ...buttons,
    ...issue,
    ...comment,
    ...confirmDelete,
    ...listIssues,
};
