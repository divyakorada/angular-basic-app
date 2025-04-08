import { Component, Input, OnChanges, SimpleChange, SimpleChanges} from "@angular/core";

@Component({
    selector: 'simple',
    template: `you entered: {{simpleInput}}`
})
export class simpleComponent implements OnChanges {
   @Input() simpleInput: string;

   ngOnChanges(changes: SimpleChanges): void {
    console.log('changes::::', changes);
    for(let properyName in changes) {
        console.log('properyName::::', properyName);
        let change = changes[properyName];
        console.log('change::::', change);
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        console.log(`${properyName} currentValue = ${current}, previousValue = ${previous}`);
    }
   }

}