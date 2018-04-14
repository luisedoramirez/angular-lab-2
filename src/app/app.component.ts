import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yes or No';
  enabled = true;
  url = 'https://yesno.wtf/api';
  public imageSource;

  constructor(private http: HttpClient){
    
  }

  mostrar(){
    this.http.get(this.url).subscribe(data => {
      console.log(data);
      this.imageSource = data['image'];
    });
  }
}