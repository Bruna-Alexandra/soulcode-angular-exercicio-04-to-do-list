import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[BtnClearAll]'
})
export class BtnClearallDirective {

  constructor(
    private clearAllDiv: ElementRef

  ) {
    this.clearAllDiv.nativeElement.style.display = 'flex'
    this.clearAllDiv.nativeElement.style.justifyContent = 'space-around';
    this.clearAllDiv.nativeElement.style.alignItems = 'center';
    this.clearAllDiv.nativeElement.style.width = '330px';
/*     this.clearAllDiv.nativeElement.style.paddingTop = '15px';
    this.clearAllDiv.nativeElement.style.paddingLeft = '4px'; */
    this.clearAllDiv.nativeElement.style.fontFamily = "'Poppins', sans-serif";
    this.clearAllDiv.nativeElement.style.marginLeft = 'auto'
    this.clearAllDiv.nativeElement.style.marginRight = 'auto'
    this.clearAllDiv.nativeElement.style.marginTop = '20px'

   }

}
