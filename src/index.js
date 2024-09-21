function selecionaPrato(prato) {
    const pratoSelecionado = document.querySelector(".prato.selecionado");
    prato.classList.add("selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }
    pedido();
}

function selecionaBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebida.selecionado");
    bebida.classList.add("selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
    pedido();
}

function selecionaSobremesa(sobremesa) {
    const sobremesaSelecionada = document.querySelector(".sobremesa.selecionado");
    sobremesa.classList.add("selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }
    pedido();
}

function pedido() {
    if (document.querySelector(".prato.selecionado") !== null && document.querySelector(".bebida.selecionado") !== null && document.querySelector(".sobremesa.selecionado") !== null) {
        const fechamento = document.querySelector(".fechar");
        fechamento.classList.add("selecionados");
        fechamento.innerHTML = "Confirmar pedido";
        fechamento.addEventListener('click', conta);
    }
    else {
        const fechamento = document.querySelector(".fechar.selecionados");
        fechamento.classList.remove("selecionados");
        fechamento.innerHTML = "Selecione os 3 itens <br>para fechar o pedido";
        fechamento.removeEventListener('click', conta)
    }
}

function esconder() {
    const conta = document.querySelector(".confirmacao");
    conta.classList.add("escondido");
}

function conta() {
    total()
    const conta = document.querySelector(".confirmacao.escondido");
    conta.classList.remove("escondido");
}

function total() {
    const nomePrato = document.querySelector(".prato.selecionado .nome").textContent;
    const nomeBebida = document.querySelector(".bebida.selecionado .nome").textContent;
    const nomeSobremesa = document.querySelector(".sobremesa.selecionado .nome").textContent;
    const precoPrato = Number(document.querySelector(".prato.selecionado .preco").textContent);
    const precoBebida = Number(document.querySelector(".bebida.selecionado .preco").textContent);
    const precoSobremesa = Number(document.querySelector(".sobremesa.selecionado .preco").textContent);

    const totalPrato = document.querySelector(".precoPrato");
    const totalBebida = document.querySelector(".precoBebida");
    const totalSobremesa = document.querySelector(".precoSobremesa");
    const total = document.querySelector(".precoTotal");

    totalPrato.innerHTML = `${nomePrato}: ${precoPrato}`;
    totalBebida.innerHTML = `${nomeBebida}: ${precoBebida}`;
    totalSobremesa.innerHTML = `${nomeSobremesa}: ${precoSobremesa}`;
    total.innerHTML = `TOTAL: ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}`

    const link = document.querySelector(".link");
    link.href = `https://wa.me/5532991731327?text=Olá.%20Gostaria%20de%20fazer%20o%20pedido:%20-%20Prato:%20${nomePrato}%20-%20Bebida:%20${nomeBebida}%20-%20Sobremesa:%20${nomeSobremesa}%20Total:%20${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}`;
}