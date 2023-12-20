document.addEventListener('DOMContentLoaded', function () {
    const nome = document.querySelector('#name');
    const usuario = document.querySelector('#username');
    const fotoPerfil = document.querySelector('#avatar');
    const reposPublic = document.querySelector('#repos');
    const seguidores = document.querySelector('#followers');
    const seguindo = document.querySelector('#following');
    const urlPerfil = document.querySelector('#link-perfil');

    const endpoint = 'https://api.github.com/users/Zoneti';

    fetch(endpoint)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function (json) {
        nome.innerHTML = json.name;
        usuario.innerHTML = json.login;
        fotoPerfil.src = json.avatar_url;
        reposPublic.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        urlPerfil.href = json.html_url;
    })
    .catch(function (erro) {
        alert("Ocorreu um erro ao buscar o usuário. Favor tentar mais tarde.");
    })
    // .finally(function () {
    //     setTimeout(function () {
    //         $(botao).find('i').removeClass('d-none');
    //         $(botao).find('span').addClass('d-none');    
    //     }, 1000);
    // })
})


        