import { AsyncSubject } from 'rxjs';

const source$ = new AsyncSubject<string>();

source$.next('Value 1');

const sub1 = source$.subscribe({
  next: v => console.log('[1] next:', v),
  error: err => console.log('[1] error:', err),
  complete: () => console.log('[1] complete!'),
});

source$.next('Value 2');

source$.next('Value 3');

// source$.error('Error Message');
source$.complete();

const sub2 = source$.subscribe({
  next: v => console.log('[2] next:', v),
  error: err => console.log('[2] error:', err),
  complete: () => console.log('[2] complete!'),
});
