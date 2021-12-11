import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {faEnvelope, faMapMarkedAlt, faPhone, faDatabase} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  user:any;

  @Output("nextProfile") nextProfile: EventEmitter<any> = new EventEmitter();

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faDatabase = faDatabase;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

  clickNext(){
    this.nextProfile.emit();
  }

}
