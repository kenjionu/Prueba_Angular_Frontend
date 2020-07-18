import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-moviem',
  templateUrl: './moviem.component.html',
  styleUrls: ['./moviem.component.css']
})
export class MoviemComponent {
  fecha_pub:any;
  submitted = false;
  event: EventEmitter<any>=new EventEmitter();
  movieForm: FormGroup;

  constructor(private servicio: MovieService, private formBuilder: FormBuilder, public bsModalRef: BsModalRef) { 


  }


  ngOnInit(): void {
    this.createMovieForm();

  }

  get movieFormControl() {
    return this.movieForm.controls;
  }


  createMovieForm(){
    this.movieForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fecha_pub: new FormControl(this.fecha_pub, [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),

    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.movieForm.valid) {
      let crearmovie = {
        nombre: this.movieForm.get('nombre').value,
        fecha_pub: this.movieForm.get('fecha_pub').value,
        estado: this.movieForm.get('estado').value,
        imagen: this.movieForm.get('imagen').value
      };
    
      this.servicio.addMovie(crearmovie).subscribe(data=>{
        console.log(data);
          this.event.emit('OK');
          this.bsModalRef.hide();
        
      });
      // console.log('Your form data : ', this.movieForm.value );
      alert('¡¡Se ha ingresado sus datos con éxitos!!!\n Check the values in browser console.');
      console.table(this.movieForm.value);
    }
   
}

  onClose(){
    this.bsModalRef.hide();
  }
}
