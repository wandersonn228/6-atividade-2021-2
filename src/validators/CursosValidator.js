import mensagens from "./mensagens"

const CursosValidador = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    duracao: {
        maxLength: { value: 11, message: mensagens.maxLength + ': 11' },
    },

    modalidade: {
        required: mensagens.required,
        maxLength: { value: 1, message: mensagens.maxLength + ': 1' },
    }

}

export default CursosValidador