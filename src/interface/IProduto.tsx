export default interface IProduto {
    id: number
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
    qtd?: number
    valorTotal?: number
}