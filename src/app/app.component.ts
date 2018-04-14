import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yes or No';
  url = 'https://yesno.wtf/api';
  public imageSource;
  public respuesta;

  constructor(private http: HttpClient){
    
  }

  mostrar(question: any){
    
    if (!question.value) {
      alert('PONGA UNA PREGUNTAS')
    }
    this.http.get(this.url).subscribe(data => {
      console.log(data);
      this.imageSource = data['image'];
      this.respuesta = data['answer']=="yes"?"SI":"NO";
    });
  }
}