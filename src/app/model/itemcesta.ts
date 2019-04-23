import { Cesta } from './cesta';

export class ItemCesta {

    public id: number; 
    public cesta_id: Cesta; 
    public marca: string;
    public unidade: string;
    public filtro: string;
    public valor: number; 
}