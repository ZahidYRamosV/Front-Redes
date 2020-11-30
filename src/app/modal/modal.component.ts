import { InicioComponent } from '../inicio/inicio.component';
import { Component, OnInit, NgModule } from '@angular/core';
import{ NgForm } from '@angular/forms';
import{ Location } from '@angular/common';
import { Serviceservice } from './../service.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  constructor(
    public listServ : Serviceservice,
    private service: Serviceservice,
    private location: Location  
  ) { }

  ngOnInit(): void {
  }

  onSaveBook(bookForm: NgForm):void{
    console.log('UPDATE Libro');
    this.listServ.updateLibro(bookForm.value).subscribe(book => location.reload());
  }

}