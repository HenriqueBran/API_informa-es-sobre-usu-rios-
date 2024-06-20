document.getElementById('fetch-button').addEventListener('click', fetchUser);

function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      displayUser(user);
    })
    .catch(error => console.error('Erro ao buscar usuário:', error));
}

function displayUser(user) {
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = `
    <div class="user-info">
      <img src="${user.picture.large}" alt="Foto do usuário">
      <p><strong>Nome:</strong> ${user.name.first} ${user.name.last}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Telefone:</strong> ${user.phone}</p>
      <p><strong>Localização:</strong> ${user.location.city}, ${user.location.country}</p>
    </div>
  `;
}
