import { from, Observable } from 'rxjs';

const source$ = new Observable(observer => {
  // Imagine http request being done here
  observer.next('Value 1');
  observer.next('Value 2');
  observer.complete();

  return () => {
    console.log('observer unsubscribed');
  };
});
source$.subscribe(v => console.log('[1] Received Value:', v));
source$.subscribe(v => console.log('[2] Received Value:', v));
source$.subscribe(v => console.log('[3] Received Value:', v));

const source2$ = from(['Value 1', 'Value 2']);
source2$.subscribe(v => console.log('[4] Received Value:', v));
source2$.subscribe(v => console.log('[5] Received Value:', v));
source2$.subscribe(v => console.log('[6] Received Value:', v));
