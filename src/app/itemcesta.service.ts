import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { ItemCesta } from './model/itemcesta';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ItemcestaService {

  constructor(private database: DatabaseService) { }

/*
  public insert(item: ItemCesta) {
    return this.database.getDB()
    .then((db: SQLiteObject)=>{
      let  sql = 'insert into item_cesta(cesta_id,marca_desc,unidade_desc,filtro_desc,valor) values (?,?,?,?,?)';
      let data = [item.cestaId,item.marcaDesc,item.unidadeDesc,item.filtroDesc,item.valor]; 

      return db.executeSql(sql,data).catch((e)=>console.error(e)); 
    })
    .catch((e)=>console.error(e)); 
  }


  public getAll() {
    return this.database.getDB()
    .then((db: SQLiteObject)=>{
      let  sql = 'select * from item_cesta';

      return db.executeSql(sql)
      .then((data:any)=>{
        if(data.rows.length > 0){
          let itens : any[] = []; 

          for(var i=0; i<data.rows.length; i++) {
            var row = data.rows.item(i); 

            let item = new ItemCesta(); 
            item.id = row.id; 
            item.cestaId = row.cesta_id; 
            item.marcaDesc = row.marca_desc; 
            item.unidadeDesc = row.unidade_desc; 
            item.filtroDesc = row.filtro_desc; 
            item.valor= row.valor; 

            itens.push(item); 
          }
          return itens; 
        }
        return null; 
      })
      .catch((e)=>console.error(e)); 
    })
    .catch((e)=>console.error(e)); 
  }
*/
}
