// Bootstrap App Module into Browser
// Load App into Browser

import {platformBrowserDynamic} 
        from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

// bootstrap the app
platformBrowserDynamic()
                .bootstrapModule(AppModule);
