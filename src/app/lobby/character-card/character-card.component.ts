import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: false,
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.less'
})
export class CharacterCardComponent {
  @Input() character!: { name: string, maxHp: number};
  @Output() characterClicked: EventEmitter<string> = new EventEmitter<string>();

}
