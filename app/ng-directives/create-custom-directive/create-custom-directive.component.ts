// >> custom-directive-code  
import {Component, Directive, ViewContainerRef, TemplateRef, Inject} from '@angular/core';
import {Device, platformNames} from "platform";
import {DEVICE} from "nativescript-angular/platform-providers";

// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

@Directive({ selector: "[ifAndroid]" })
export class IfAndroidDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({ selector: "[ifIos]" })
export class IfIosDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Component({
    selector: 'create-custom-directive',
    styleUrls:["ng-directives/create-custom-directive/create-custom-directive.component.css"],
    directives: [COMMON_DIRECTIVES, IfIosDirective, IfAndroidDirective],
    templateUrl: "ng-directives/create-custom-directive/create-custom-directive.component.html",
})

export class CreateCustomDirectiveExampleComponent{

}
// << custom-directive-code        