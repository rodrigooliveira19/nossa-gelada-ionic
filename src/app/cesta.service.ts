import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Cesta } from './model/cesta';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  constructor(private database: DatabaseService) { }

/*
  public insert(cesta: Cesta) : any{
    return this.database.getDB()
    .then((db: SQLiteObject)=>{
      let  sql = 'insert into cesta(descricao,estabelecimento_desc) values (?,?)';
      let data = [cesta.descricao,cesta.estabelecimentoDesc]; 

      return db.executeSql(sql,data).catch((e)=>console.error(e)); 
    })
    .catch((e)=>console.error(e)); 
  }

  public update(cesta: Cesta): any {
    return this.database.getDB()
    .then((db: SQLiteObject)=>{
      let  sql = 'update cesta set descricao = ?, estabelecimento_desc = ?  where id = ? ';
      let data = [cesta.descricao,cesta.estabelecimentoDesc,cesta.id]; 

      return db.executeSql(sql,data).catch((e)=>console.error(e)); 
    })
    .catch((e)=>console.error(e)); 
  }

  public delete(id: number): any {
    return this.database.getDB()
    .then((db: SQLiteObject)=>{
      let  sql = 'delete from cesta where id = ? ';
      let data = [id]; 

      return db.executeSql(sql,data).catch((e)=>console.error(e)); 
    })
    .catch((e)=>console.error(e)); 
  }

  public getAll() : any{
    return this.database.getDB()
    .then((db: SQLiteObject)=>{
      let  sql = 'select * from cesta ';
      //let data = [cesta.id]; 

      return db.executeSql(sql)
      .then((data:any)=>{
        if(data.rows.length > 0){
          let cestas : any[] = []; 

          for(var i=0; i<data.rows.length; i++) {
            var item = data.rows.item(i); 

            let cesta = new Cesta(); 
            cesta.id = item.id; 
            cesta.descricao = item.descricao; 
            cesta.estabelecimentoDesc = item.estabelecimento_desc; 

            cestas.push(cesta); 
          }
          return cestas; 
        }
        return null; 
      })
      .catch((e)=>console.error(e)); 
    })
    .catch((e)=>console.error(e)); 
  }

*/
}
