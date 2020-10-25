# NebularFormlyLibrary

This is an Implementation of **[Ngx-Formly](https://formly.dev/)** for **[Nebular Ui Library](https://akveo.github.io/nebular/)** for angular

# Features :
    - Formly Schema for Nebular Elements
    - Supported Components of Nebular 
        - Input
        - Checkbox
        - Radio
        - Select
        - Datepicker
        - TimePicker
        - Toggle
        - TextArea
        
# Steps to install "Nebular-Formly"
    1.Create a new project 
        ng new nebular-formly
    2.Install Nebular 
        ng add @nebular/theme   Ref(https://akveo.github.io/nebular/docs/guides/install-nebular)
    3.Install ngx-formly core
        npm i @ngx-formly/core
    4.Install Nebular-Formly
        npm i ngx-nebular-formly

```javascript
    import { NebularFormlyModule } from 'ngx-nebular-formly';
    import { FormlyModule } from '@ngx-formly/core';
    import {ReactiveFormsModule} from '@angular/forms';
    
    @NgModule({
        NebularFormlyModule,
        FormlyModule,
        ReactiveFormsModule,
    })
```

Your good to go🔥🔥🔥.

Resources :
    - https://www.npmjs.com/package/@ngx-formly/core
    - https://akveo.github.io/nebular/
    - https://formly.dev/
