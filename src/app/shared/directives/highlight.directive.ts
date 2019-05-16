import { Directive,
          HostListener,
          ElementRef,
          Renderer2,
          Input,
          Output, EventEmitter,
          OnInit
} from '@angular/core';

// <div appHighlight>
// <p appHighlight..
// <input appHighlight..
// div, p, input are hosting directive appHighlight

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  color = 'lightblue';

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2
    ) { }

    @HostListener('mouseenter')
    mouseIn() {
      console.log('mouse enter');
      this.renderer.setStyle(this.hostElement.nativeElement,
                            'background',
                            this.color);
    }

    @HostListener('mouseleave')
    mouseOut() {
      console.log('mouse left');
      this.renderer.removeStyle(this.hostElement.nativeElement,
                               'background');
    }

    @HostListener('click')
    mouseClicked(){
      console.log('mouse click');
    }

}
