import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSelectedChar]',
  standalone: false
})
export class SelectedCharDirective implements OnChanges {
  @Input() color: string = 'black';
  @Input() selected: boolean = false;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected']) {
      this.highlight();
    }
  }

  highlight() {
    if (this.selected) {
      this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.color}`);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }

}
