import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-medit',
  templateUrl: './medit.component.html',
  styleUrls: ['./medit.component.css']
})
export class MeditComponent implements OnInit {
  submitted = false;
  event: EventEmitter<any> = new EventEmitter();
  movieForm: FormGroup;
  postData: any;
  _id = '';
  nombre = '';
  estado = '';
  fecha_pub: '';
  imagen: '';
  item_data: any;

  constructor(private router: Router, private route: ActivatedRoute, private servicio: MovieService, private formBuilder: FormBuilder, public bsModalRef: BsModalRef) { 
    // console.log(localStorage.getItem('item_data'));   
    let retrievedobjecto = JSON.parse(localStorage.getItem('item_data'))
    console.log(retrievedobjecto)

    // console.log(retrievedobjecto._id)
    let dataid = retrievedobjecto._id
    this.servicio.getMoviesId(dataid).subscribe(data => {
          this.postData = data;
          
          if (this.movieForm!=null && this.postData!=null) {
            this.movieForm.controls['nombre'].setValue(this.postData.nombre);
            this.movieForm.controls['imagen'].setValue(this.postData.imagen);
            this.movieForm.controls['fecha_pub'].setValue(this.postData.fecha_pub);
            this.movieForm.controls['estado'].setValue(this.postData.estado);

          }
        }, 
        error => { console.log("Error de datos al actualizar:  " + error) });

  }


  ngOnInit(): void {
    this.EditMovieForm()
  }

  get movieFormControl() {
    return this.movieForm.controls;
  }


  EditMovieForm(){
    this.movieForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fecha_pub: new FormControl(new Date(), [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),

    });
  }

  getMoviesId(id: any) {
    this.servicio.getMoviesId(id).subscribe((data: any) => {
      this._id = data._id;
      this.movieForm.setValue({
        nombre: data.nombre,
        fecha_pub: data.fecha_pub,
        estado: data.estado,
        imagen: data.imagen,
      });
    });
  }



  
  onSubmit() {
    let retrievedobjecto = JSON.parse(localStorage.getItem('item_data'))
    console.log(retrievedobjecto)

    // console.log(retrievedobjecto._id)
    let dataid = retrievedobjecto._id

    this.submitted = true;
    if (this.movieForm.valid) {
      let editarmovie = {
        nombre: this.movieForm.get('nombre').value,
        fecha_pub: this.movieForm.get('fecha_pub').value,
        estado: this.movieForm.get('estado').value,
        imagen: this.movieForm.get('imagen').value
      };
    
      this.servicio.updateMovie(dataid, editarmovie).subscribe(data=>{
        console.log(data);
          this.event.emit('OK');
          this.bsModalRef.hide();
        
      });
      // console.log('Your form data : ', this.movieForm.value );
      alert('¡¡Se ha actualizado sus datos con éxitos!!!\n.');
      console.table(this.movieForm.value);
    }
   
}

onClose(){
  this.bsModalRef.hide();
}


}
