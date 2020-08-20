import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../model/common/field';
import {InputComponent} from '../../component/dynamic-fields/input/input.component';
import {SelectComponent} from '../../component/dynamic-fields/select/select.component';
import {DateComponent} from '../../component/dynamic-fields/date/date.component';


const componentMapper = {
  input: InputComponent,
  select: SelectComponent,
  date: DateComponent,
};

@Directive({
  selector: '[dynamicField]',
})


export class DynamicFieldDirective implements OnInit {
  @Input() group: FormGroup;
  @Input() field: Field;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {
  }

  ngOnInit() {

    if (componentMapper[this.field.type]) {
      const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.type],
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;


    }

  }

}
