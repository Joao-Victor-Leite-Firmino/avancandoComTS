interface Usuario {
    nome: string;
    idade: number;
    Categoria: string;
}

type Categoria = 'adminstrador' | 'funcionario' | 'cliente'

function criarUsuario(nome: string, idade: number, Categoria: 'administrador' | 'funcionario' | 'cliente'): Usuario {
    return { nome, idade, Categoria };
}

const admin = criarUsuario('Cazzaro', 23, "administrador");
const funcionario = criarUsuario('Zollim', 19, 'funcionario');
const cliente = criarUsuario('Saymons', 23, 'cliente');