import { Libro } from './model/libros';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Serviceservice {

  

  constructor(private http: HttpClient) { }
  private API = 'http://127.0.0.1:8000/api/v1/libros/';
  
  

  public selectedBook:Libro={
    id:null,
    name: '',
    price: null,
    agepublic: null,
    description: ' ',
    imange:'',

  };

  getAllLibro(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.API);
  }
  
  addNuevoLibro(libro:Libro): Observable<Libro> {
    return this.http.post<Libro>(this.API,libro);
  }

  deleteLibro(id): Observable<{}>{
     this.API = `http://127.0.0.1:8000/api/v1/detail/libros/${id}/`;
    return this.http.delete(this.API);
  }

  updateLibro(libro) {

    console.log(libro);
    const libroId = libro.libroId;
    const API= `http://127.0.0.1:8000/api/v1/detail/libros/${libro.id}/`;
    return this.http.put<Libro>(API,libro);
  }

}