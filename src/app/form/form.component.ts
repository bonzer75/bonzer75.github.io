import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    public messagesService: MessagesService,
    public fb: FormBuilder
    ) { }

  daForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.daForm = this.fb.group(
      {
        name: ['', Validators.required],
        subject: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      }
    )
  }

  async submit() {
    const res = await this.messagesService.addMessage(this.daForm.value)
    //console.log(res)
    swal.fire(
      '¡Gracias!',
      'tu formulario ha sido enviado con éxito.',
      'success'
    )
    this.daForm.reset()
  }

}
