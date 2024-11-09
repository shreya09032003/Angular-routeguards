import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
 
  formData = { name: '', email: '', phone: '', message: '' };
  isFormDirty: boolean = false; 
  onInputChange() {
    this.isFormDirty = true; 
  }  isFormComplete(): boolean {
    return (
      this.formData.name.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.phone.trim() !== '' &&
      this.formData.message.trim() !== ''
    );
  }
  onSend() {
    if (this.isFormComplete()) {
      this.isFormDirty = false;
      alert("Form submitted successfully!");
    }
  }
  // onCancel() {
  // }

  canDeactivate(): boolean {
    return !this.isFormDirty || confirm('You have unsaved changes! Do you really want to leave?');
  }
}
