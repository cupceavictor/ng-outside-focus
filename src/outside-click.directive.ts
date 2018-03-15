import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[outsideClick]'
})
export class OutsideClickDirective implements OnDestroy, OnInit {

    @Output() outsideClick: EventEmitter<Event>;


    constructor(private elementRef: ElementRef) {
        this.outsideClick = new EventEmitter<Event>();
    }


    ngOnInit() {
        // scenario:
        //   - a click on a DOM element results in the addition to the DOM of an element that has this attribute directive
        // consequence:
        //   - if we don't use setTimeout, the handler is added tot the handlers of the click in the scenario and
        //     this.onClick is called
        setTimeout(() => {
            document.body.addEventListener('click', this.onClick)
        }, 0);

        setTimeout(() => {
            document.body.addEventListener('keyup', this.onTab)
        }, 0);
    }


    private onClick = (event: Event) => {
        if (this.elementRef && !this.elementRef.nativeElement.contains(event.target)) {
            this.outsideClick.emit(event);
        }
    };


    private onTab = (event: Event) => {
        // If TAB key pressed focus can be moved outside of wanted block so it should work as a click outside of element.
        if ((event['keyCode'] === 9)) {
            this.onClick(event);
        }
    };


    ngOnDestroy() {
        document.body.removeEventListener('click', this.onClick);
        document.body.removeEventListener('keyup', this.onTab);
    }

}
