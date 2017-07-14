import { OnInit, OnDestroy } from '@angular/core';

export abstract class InformationViewCycle implements OnInit, OnDestroy {
    
    ngOnInit() { 
        document.body.classList.add('information');
        document.documentElement.classList.add('information');
    }

    ngOnDestroy() {
        document.body.classList.remove('information');
        document.documentElement.classList.remove('information');
    }

}
