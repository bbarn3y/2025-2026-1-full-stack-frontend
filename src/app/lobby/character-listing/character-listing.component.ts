import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Character, CharacterClass} from '../../_models/character';
import {CharacterService} from '../../_service/character.service';
import {debounceTime, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-character-listing',
  standalone: false,
  templateUrl: './character-listing.component.html',
  styleUrl: './character-listing.component.less'
})
export class CharacterListingComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef<HTMLInputElement>;

  characters: Character[] = [
    new Character('Mage Máté', '/images/characters/mage.webp', CharacterClass.MAGE, 5),
    new Character('Warrior Vazul', '/images/characters/warrior.webp', CharacterClass.WARRIOR, 9)
  ];
  filteredCharacters: Character[] = [...this.characters];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    // this.characters = this.characterService.getCharacters();
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((event: InputEvent) => ((event.target as HTMLInputElement).value.trim())
      ))
      .subscribe((filter: string) => {
        console.log(filter);
        this.filterCharacterList(filter ?? '');
      })
  }

  characterClickHandler(characterName: string) {
    console.log(characterName);
  }

  filterCharacterList(filter: string): void {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(filter.toLowerCase()));
  }

}
