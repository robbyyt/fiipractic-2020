import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from "../../../../environments/environment";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  captchaKey = environment.captcha.key;
  public registerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      gdprAsii: new FormControl(false, [Validators.required]),
      gdprCompany: new FormControl(false),
      captcha: new FormControl(false),
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
}
