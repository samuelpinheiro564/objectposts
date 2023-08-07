const posts = [];
function savePost() {
    const title = document.getElementById("title").value;
    const resumo = document.getElementById("resumo").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    console.log(title, resumo, publisher, date)
    if (title && resumo && publisher && date) {
        storePost(title, resumo, publisher, date);
        cleanFields();
    }
}
function storePost(title, resumo, publisher, date) {
    const post = {
         title,
     resumo,
    publisher,
         date
    };

    posts.push(post);
    console.log(post);
    showPosts()
}
function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
              <div  class="post">
               <h2>${post.title}</h2>
               <p><strong>Resumo:</strong> ${post.resumo}</p>
               <p><strong>Autor:</strong> ${post.publisher}</p>
               <p><strong>Data de Publicaçâo:</strong> ${post.date}</p>

               <button onclick="editPost(${index})">Editar</button>
               <button onclick="removePost(${index}>Remover</button>
              </div>
          `;
    });
    /* calback e forEach para formar uma eurofunction*/
    document.getElementById("list").innerHTML = showContent;
}
function cleanFields(){
    document.getElementById("title").value = " ";
    document.getElementById("resumo").value = " ";
    document.getElementById("publisher").value = " ";
    document.getElementById("date").value = " ";
}
function editPost(index){
 const post = posts[index];
}