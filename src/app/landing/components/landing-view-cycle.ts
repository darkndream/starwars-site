import { OnInit, OnDestroy } from '@angular/core';

export abstract class LandingViewCycle implements OnInit, OnDestroy {
    
    ngOnInit() { 
        document.body.classList.add('landing');
        document.documentElement.classList.add('landing');
    }

    ngOnDestroy() {
        document.body.classList.remove('landing');
        document.documentElement.classList.remove('landing');
    }

}
