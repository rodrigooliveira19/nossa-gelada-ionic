export class Padrao {

    public id: string; 
    public descricao: string; 

    constructor(descricao:string) {
        this.descricao = descricao; 
    }

    getId() {
        return this.id; 
    }

    setId(id:string) {
        this.id = id; 
    }

    getDescricao() {
        return this.descricao; 
    }

    setDescricao(descricao:string) {
        this.descricao;
    }
}
