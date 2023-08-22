const formulario = document.getElementById('formulario');
const tituloPost = document.getElementById('titulo');
const contenidoPost = document.getElementById('contenido');
const listaPost = document.getElementById('lista');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    

    const titulo = tituloPost.value;
    const contenido = contenidoPost.value;

    if (titulo && contenido) {
        const post = document.createElement('li');
        post.className = 'item-post';
        post.innerHTML = `
          <h2>${titulo}</h2>
          <p class="contenido-post">${contenido}</p>
          <div class="likes">
          <span class="like" onclick=aumentarLikes()><img src="imagenes/bxs-like.svg" alt=""></span>
    <span class="likeConteo">0</span>
    <span class="like" onclick=disminuirLikes()><img src="imagenes/bxs-dislike.svg" alt=""></span>
    <span class="likeConteo2">0</span>
  </div>
        `;
        listaPost.appendChild(post);

        tituloPost.value = '';
        contenidoPost.value = '';
    }
    
});

function aumentarLikes() {
    const likeCont = document.querySelector('.likeConteo');

    let likes = parseInt(likeCont.textContent);
    likes++;
    likeCont.textContent = likes;
}
function disminuirLikes() {
    const likeCont = document.querySelector('.likeConteo2');

    let likes = parseInt(likeCont.textContent);
    likes++;
    likeCont.textContent = likes;
}
