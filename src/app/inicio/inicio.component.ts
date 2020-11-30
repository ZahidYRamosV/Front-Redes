import { Serviceservice } from './../service.service';
import { AppRoutingModule } from './../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { Libro } from './../Model/libros';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';






@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  llenado = {
    id:null,
    name: '',
    price: null,
    agepublic: null,
    description: ' ',
    imange:'',
  }
  SelectedAlumno: Libro;
  alumns : Libro[];
  constructor(private listServ : Serviceservice, private router: Router, private service: Serviceservice) {}


  ngOnInit(): void {
    this.listServ.getAllLibro().subscribe( data => (this.alumns=data));
    
  }

  render(): void {
    this.listServ.getAllLibro().subscribe( data => (this.alumns=data));
  }

  agregarAlum(){
    this.listServ.addNuevoLibro(this.llenado).subscribe(data => console.log(data));
    this.llenado ={
      id:null,
      name: '',
      price: null,
      agepublic: null,
      description: ' ',
      imange:'',
    };
    alert("Libro Agregado")
    window.location.reload();    
  }
// -------------------------------------------------------------
  delete(libros:Libro):void{
    console.log(libros);
     this.listServ.deleteLibro(libros)
     .subscribe(data=>{

        window.location.reload(); 
     })
  }

  // --------------------------------------------------------------------
  
  cargarDatos(libros:Libro):void{
    this.listServ.selectedBook = Object.assign({},libros);    
   }
}