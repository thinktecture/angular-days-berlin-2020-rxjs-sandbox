import { BehaviorSubject } from 'rxjs';

const source$ = new BehaviorSubject<string>('Initial');

const sub1 = source$.subscribe({
  next: v => console.log('[1] next:', v),
  error: err => console.log('[1] error:', err),
  complete: () => console.log('[1] complete!'),
});

source$.next('Value 1');

const sub2 = source$.subscribe({
  next: v => console.log('[2] next:', v),
  error: err => console.log('[2] error:', err),
  complete: () => console.log('[2] complete!'),
});

source$.next('Value 2');

// source$.error('Error Message');
source$.complete();

const sub3 = source$.subscribe({
  next: v => console.log('[3] next:', v),
  error: err => console.log('[3] error:', err),
  complete: () => console.log('[3] complete!'),
});
