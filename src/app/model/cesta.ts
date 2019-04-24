import { ItemCesta } from './itemcesta';
export class Cesta {

    public id: string; 
    public descricao: string; 
    public estabelecimento: string; 

    public itens: ItemCesta[]; 
}