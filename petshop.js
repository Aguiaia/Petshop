let pets = [{nome: 'doug'}, {nome: 'costelinha'}];
const listarPets = () => {
    let conteudo = "";
    for(let pet of pets) {
        conteudo+= `
        -------------
        Nome: ${pet.nome}
        -------------`;
    }
    return conteudo;
};
const adicionarPet = novoPet => {
    pets.push(novoPet);
}

const buscarPet = nomePet => {
    let nomes = pets.filter(pet => pet.nome == nomePet);
    return nomes
    }


module.exports = {listarPets, adicionarPet}