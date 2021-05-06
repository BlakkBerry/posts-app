import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StyleService} from '../shared/services/style.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(\\+38)?0\\d{9}$')])
  });

  backgroundColor = '#dceaf5';

  constructor(private router: Router, private styleService: StyleService) {
  }

  ngOnInit(): void {
    this.styleService.changeBackground(this.backgroundColor);
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
    this.router.navigate(['/']);
  }

}
