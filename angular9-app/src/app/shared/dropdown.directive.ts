import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Allows us to bind to properties of element the directive is placed on
  // in this case the class open
  @HostBinding('class.open') open = false;

  @HostListener('click') displayDropdown() {
    this.open = !this.open;
  }

  //  Option to close dropdown clicking anywhere outside
  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  // }
  // constructor(private elRef: ElementRef) {}

}
