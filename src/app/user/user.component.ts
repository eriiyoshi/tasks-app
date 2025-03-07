import { Component, computed, signal, Input, input, Output, EventEmitter, output } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  /*@Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;*/
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  //signal approach:
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //avatar = input<string>();
  //name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //signal approach:
  /*imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  });*/

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
