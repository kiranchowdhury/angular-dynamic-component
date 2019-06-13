import {Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';  
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  currentComponent = null;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: false }) dynamicComponentContainer: ViewContainerRef;
  componentMap = [];
  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }
    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {
        provide: inputName, 
        useValue: data.inputs[inputName]
      };
    });
    
    
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
          
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    //console.log("injector",inputProviders, resolvedInputs, factory, component);
    // We insert the component into the dom container
    let tempViewRef = this.dynamicComponentContainer.insert(component.hostView);
    let tempViewRefIndex = this.dynamicComponentContainer.indexOf(tempViewRef);
   // console.log(this.dynamicComponentContainer.get(tempViewRefIndex));
    
    // console.log('**showNum Provider',this.dynamicComponentContainer);
    
    // Destroy the previously created component
    if(this.currentComponent){
      //this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
    console.log('component id => ', (<any>component.instance).id);

    this.componentMap.push({id: (<any>component.instance).id, componentRef: component });

    console.log('The map', this.componentMap);
  }

  constructor(private resolver: ComponentFactoryResolver) { }



}