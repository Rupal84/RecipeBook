import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: "[appDropdown]"
})
export class DropDownDirective{
    @HostBinding('class.open') isOpen = false
    @HostListener('document:click') toggleOpen(){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef){}
}