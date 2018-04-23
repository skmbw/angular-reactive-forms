import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address, states} from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // heroForm = new FormGroup({
  //   name: new FormControl()
  // });
  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required], // <--- the FormControl called "name"
      address: this.fb.group(new Address()), // 和数据模型保持接近
      power: '',
      sidekick: ''
    });
  }

  ngOnInit() {
  }

}
