
import {InMemoryDbService} from 'angular-in-memory-web-api';


export class MovieData implements InMemoryDbService {
  createDb(){
    const movies=[
      { id: 1, name: 'The crow', horario: '3 p.m. a 4 p.m.', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/39/Crow_ver2.jpg' , estado:"Disponible" },
      { id: 2, name: 'The Grinch', horario: '8 a.m. a 10a.m.', imagen: 'https://www.ecartelera.com/carteles/4500/4572/001.jpg', estado:"Disponible"  },
      { id: 3, name: 'Donnie Darko', horario: '2 p.m. a 4 p.m. ', imagen: 'https://cdn.culturagenial.com/es/imagenes/donnie-darko-cartel.jpg', estado:"No Disponible" },


    ];
    return {movies};
  }
}
