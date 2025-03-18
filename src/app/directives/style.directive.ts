import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

class Style {
    [string: string]: string;
}

@Directive({
    selector: "appStyle"
})
export class AppStyleDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {

    }

    @Input('appStyle') set display(value: Style) {
        const entries = Object.entries(value);

        entries.forEach(e => {
            const [style, condition] = e;

            if (condition) {
                const [name, value] = style.split(":");
                this.renderer.setStyle(this.element.nativeElement, name.trim(), value.trim());
            }
        })
    }
}
