interface Produto {
    nomeProduto: string;
    preco: number;
    Tipo: string;
}

type Tipo = 'Eletrônico' | 'Vestuário' | 'Alimento'

function novoProduto(nomeProduto: string, preco: number, Tipo:'Eletrônico' | 'Vestuário' | 'Alimento'):Produto{
    return{ nomeProduto, preco, Tipo };
}

const geladeira = novoProduto('Geladeira', 2000, 'Eletrônico')
const camiseta = novoProduto('Camiseta', 50, 'Vestuário')
const sushi = novoProduto('Sushi', 100, 'Alimento')