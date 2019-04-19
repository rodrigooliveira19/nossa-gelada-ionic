import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name:'nossagelada.db', 
      location:'default'
    }); 

  }

  public createDatabase() {
    return this.getDB()
    .then((db:SQLiteObject)=>{
      this.createTables(db); 
    })
    .catch(e=>console.error(e)); 
  }

  private createTables(db:SQLiteObject) {
    db.sqlBatch([
      [ 'CREATE TABLE IF NOT EXISTS cesta (id integer primary key AUTOINCREMENT NOT NULL, descricao TEXT,estabelecimento_desc TEXT)'],
      [ 'CREATE TABLE IF NOT EXISTS item_cesta (id integer primary key AUTOINCREMENT NOT NULL,cesta_id integer,marca_desc TEXT,unidade_desc TEXT,filtro_desc,valor numeric(10,2),FOREIGN KEY(cesta_id) REFERENCES cesta(id))']

    ])
    .then(()=>console.log('Tabelas criadas'))
    .catch(e=>console.error('Erro ao criar tabelas',e)); 
  }
}
