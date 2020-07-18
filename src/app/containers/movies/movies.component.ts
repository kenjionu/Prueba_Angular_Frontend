import { Component, OnInit, TemplateRef, EventEmitter  } from '@angular/core';
import { MovieService} from './../../services/movie.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MoviemComponent } from './../../component/modal/moviem/moviem.component';
import { MeditComponent } from 'src/app/component/modal/moviem/medit/medit.component';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  event: EventEmitter<any>=new EventEmitter();
  data: any;
  movies: any[] = [];
  modalRef: BsModalRef;
  message: string;
  parsedata: any;
  constructor(private movierservice: MovieService, private modalService: BsModalService) {
   }

  ngOnInit() : void{
    this.getDataMovie();
  }

  getDataMovie(){
    this.movierservice.getMovies().subscribe((data : any[])=>{
      this.movies = data;
    })
  }

  public deleteMovix(movieId){
    this.movierservice.deleteMovie(movieId).subscribe((ret)=>{
          console.log("movie deleted: ", ret);
          this.getDataMovie();
    })
}


public modalcrear(){
  this.modalRef = this.modalService.show(MoviemComponent);
  this.modalRef.content.event.subscribe(result => {
    if (result == 'OK') {
      this.getDataMovie();
    }
  });
}

public modalEditar(movi) {
  this.parsedata = localStorage.setItem('item_data', JSON.stringify(movi))
  console.log(this.parsedata)

  const initialState = {
    item_data: [
      movi
    ],
    };
    // const modalConfig = {
    //   animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: true, 
    // };
  // const modalParams = Object.assign({}, modalConfig, { initialState });
  this.modalRef = this.modalService.show(MeditComponent, { initialState });
  this.modalRef.content.event.subscribe(result => {
    if (result == 'OK') {
        this.getDataMovie();
        localStorage.removeItem('item_data')
    }
  });
}


EliminarModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(movieId): void {
  this.message = '¡Confirmado su eliminación!';
  this.deleteMovix(movieId);
  this.modalRef.hide();
}

decline(): void {
  this.message = '¡Denegado!';
  this.modalRef.hide();
}

}
