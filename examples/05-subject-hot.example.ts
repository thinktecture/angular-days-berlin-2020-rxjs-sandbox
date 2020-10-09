import { Subject } from 'rxjs';

const source$ = new Subject<string>();

source$.next('Value 1');

const sub1 = source$.subscribe({
  next: v => console.log('[1] next:', v),
  error: err => console.log('[1] error:', err),
  complete: () => console.log('[1] complete!'),
});

source$.next('Value 2');

const sub2 = source$.subscribe({
  next: v => console.log('[2] next:', v),
  error: err => console.log('[2] error:', err),
  complete: () => console.log('[2] complete!'),
});

source$.next('Value 3');

sub1.unsubscribe();

source$.next('Value 4');

sub2.unsubscribe();

source$.next('Value 5');

// source$.error('Error Message');
source$.complete();

const sub3 = source$.subscribe({
  next: v => console.log('[3] next:', v),
  error: err => console.log('[3] error:', err),
  complete: () => console.log('[3] complete!'),
});
