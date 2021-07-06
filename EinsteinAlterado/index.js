// Definir os dados iniciais
const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Santos',
    idade: 44,

    doido: false,

    imagem_serio: 'https://lh3.googleusercontent.com/0iBms7GtuENL-QD9UFv-_0uPm643MLeOFKKsNDYpCp_cA0LjybDM6ZHtoWdqGywmfNxABZlKBW9lvgJPdZQB7xRF6IIDwKZ7kfCoFjBf0BI8tF5m7RSLAsvnC7dTJVj2Y5P5XftNpbyKoc1RO9F-g9vdSi56EiqBA7y1Ok2916JxzGKAZGfZG5N0SDHw1difcAv8pvqNJKTiDjPVsIj28uqxkwtU0tGLBWHMq-qoKoJITZSCxtFHbishzzwpvQCbZB9BIFqrI1364HS5pQ2e9u1wCr8wfePbQ7lYLcMStcHU2qmKFl2_vD2ZMVO2uzxTr3WS34-pqK16S-iOzyrQBK-YCtiJtINXbWJruV0y4it1ol7N_2ORHy_RJgVhYXcw2IS9EKHin11k8-r3ub4Rsk2SoGXeZ3XsP7x38ZWm693qJXvmv4VFEKdO9LUUIKO4VRLuCySCsqm-bphDD_s2R2Wv8GXpa5uLx0B1RMg4BuoeMvcfyR2dNbQaf6R9A_D7_t7aV2nuMW0d7YVsbHzDlXOJIWhztqk19xe6mUwOHdEsYuT1l5hGJGJGI4preEsMq12rMjaIU_T53jdlU-gSZdX9l-EchXw5JrwOMIfmXvJahf9Q2ulCepArbdKo6emVTG5cw7J5Oe4g6f61M7Sx1eP9C5NxSwUmDNkGMCau8zn9cnO6-LggbQYoNnDRJfotBVA1l2DcchhauTmCahOpz34=w280-h396-no?authuser=1',
    imagem_doido: 'https://lh3.googleusercontent.com/D-5dVQK6N8kCW0_8UsZuyeTyWFoW8pkjkOKQ19aOvkOCPeoP_5rKwBqx2Dxr9-Lijf_zQdel2cj6qp1UrKr-NPy3x0J5yPzzM8ARRHvrwhLFqxdOqvjNOIjvQ5tr5BItpgvMkjgsLU79tA_0-WEot3uKj8a4kTzh25feKTt28-cOCZAYV86YS_knOIRpFIFPqsk00BJwW4D_M8hbL0OpOLOx7tRNnHelOnrvy8gzM0XB-8zd0COO61IjQV1lB32NHN52WXFcxHt0i5QqtwQjm4l6HPhzZvRweDxbTLRhYOm-C_WK_ych-75Eqpho1m2WsDxGUGwm7EKPergH16iZGx7wZ3tycX3BJiAphPGumIhj4R77vlI9ElZWRdl9_lucDcQvOu_6xqvt-rM-DUvqtJkzO4fTMcRM4VofHHV_06Cfe1e3Xl1ir8OVm6P4YrJqPSxVGVKDMfUIkgpgfvGPLZEwsO13mtWiGYX3pIkcwfw9BqqTwvS7SRtFPACLOf-98-taaaY3Ztf6qSoinq04dW_hForavYKm8_8LLB7QHzVOS0A1cKJxYwgDVlp5ivKi20eJLhoR9oKjFrmu0DwQvhcU-Q0X_5M15hbsEEwq3CG9d60SBH4rLG89FutvKCibzhxnQdwEakmF5PXVsvZ6D7WVCfgCPv-Q-sf5N11zJNcJOsNACv-BCRCnpuQCI7uJGHQxfNWCzgCmV4P9iKK0fH0=w252-h356-no?authuser=1'
    
    //imagem_doido: 'https://www.hypeness.com.br/1/2017/08/EinsteinL3.jpg'
}

// Capturar os elementos pelo Id
const elementoNome = document.querySelector("#nome");
const elementoSobrenome = document.querySelector("#sobrenome");
const elementoIdade = document.querySelector("#idade");
const elementoBotao = document.querySelector("#alteraHumor");
const atributoNome = elementoBotao.getAttribute("data-nome");
const atributoSobrenome = elementoBotao.getAttribute("data-sobrenome")
const divSelec = document.querySelector("#div1")
console.log(divSelec.classList.contains('div-diferente'));
divSelec.classList.remove("div-separado");
divSelec.classList.remove("div-normal");
divSelec.classList.add("div-Ricardo");
console.log(atributoNome);
console.log(atributoSobrenome);


// Atribuir os valores iniciais
elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;
elementoIdade.innerText = pessoa.idade;

// Definição da função de atualização do humor
function atualizaHumor(){
    pessoa.doido = !pessoa.doido;
    const elementoImagem = document.querySelector("#imagem");
    const elementoHumor = document.querySelector("#bloco_humor");

    if (pessoa.doido){
        elementoImagem.src = pessoa.imagem_doido;
        elementoHumor.innerHTML = pessoa.nome + ' tá <b>DOIDO</b>!';
    }
    else{
        elementoImagem.src = pessoa.imagem_serio;
        elementoHumor.innerHTML = pessoa.nome + ' tá <b>SÉRIO</b>!';
    }
}

atualizaHumor();
// Adicionar o EventListener de clique no botão
elementoBotao.addEventListener('click', atualizaHumor);
