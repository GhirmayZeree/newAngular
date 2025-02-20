import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  card = {
    cardOwner: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.card);
    }
  }
}
