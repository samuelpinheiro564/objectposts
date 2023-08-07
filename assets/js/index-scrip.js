const posts = [];
function savePost(){
    const title = document.getElementById("").value;
    const resumo = document.getElementById("").value;
    const publisher = document.getElementById("").value;
    const date = document.getElementById("").value;

    if(title && resume && publisher && date){
        storePost(title, resumo, publisher, date);
    }
}
function  storePost(title, resumo, publisher, date){
const post = {
    title: title ,
    resumo: resumo ,
    publisher: publisher,
    date: date
};

posts.push(post)
}