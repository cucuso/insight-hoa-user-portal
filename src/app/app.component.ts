import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { User } from './user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'InsightHoa';
  currentUser?: User;

  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: ''
  });

  constructor(private httpClient: HttpClient,  private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log('dd',this.checkoutForm.value);
    this.httpClient.post<[any]>('http://localhost:8080/users', this.checkoutForm.value).subscribe(response => {
      console.log('submitted user');
    });

    this.checkoutForm.reset();

  }
}


