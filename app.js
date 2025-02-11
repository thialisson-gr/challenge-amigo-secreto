let amigos = [];

function adicionarAmigo() {
  //captura o valor do campo de entrada
  let nome = document.getElementById("amigo").value.trim();

  //Valida se o nome não está vazio
  if (nome !== "") {
    amigos.push(nome);
    console.log(amigos);

    atualizarLista();
  } else {
    alert("Por favor, insira um nome válido!");
  }

  document.getElementById("amigo").value = "";
}

//Atualiza a lista de pessoas e limpa para inserção de um novo nome.
function atualizarLista() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");

    item.textContent = amigos[i];

    lista.appendChild(item);
  }
}

//Verifica se a lista está vazia, sortea um nome, e mostra no elemento da página.
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Sua lista de amigos está vazia!");
  } else {
    let sorteio = Math.floor(Math.random() * amigos.length);

    console.log(sorteio);
    let sorteado = amigos[sorteio];

    console.log(amigos[sorteio]);

    document.getElementById("resultado").innerHTML = sorteado;
  }
}
