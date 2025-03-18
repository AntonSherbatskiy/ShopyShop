import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[background]'
})
export class BackgroundDirective implements OnInit {
    constructor(element: ElementRef, renderer: Renderer2) {
        this.element = element;
        this.renderer = renderer;
    }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'background', this.color);
    }

    @Input() color?: string;

    private element!: ElementRef;
    private renderer!: Renderer2;

}
