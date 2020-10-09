import { Subject, Subscription, Observable, of } from 'rxjs';

// chrome://inspect/#devices

class Service {
  readonly source$ = new Subject<number>();
  // readonly source$ = of(1); // x

  getData(): Observable<number> {
    return this.source$;
  }
}

class Component {
  public lastValue = 0;
  private dataSubscription = Subscription.EMPTY;

  constructor(private readonly service: Service) {}

  init() {
    this.dataSubscription = this.service.getData().subscribe(value => {
      this.lastValue = value;
      console.log('Setting value');
    });
  }

  destroy() {
    this.dataSubscription.unsubscribe();
  }
}

const myService = new Service();

// Runtime
new Array(10000).fill(0).forEach(i => {
  const c = new Component(myService);
  c.init();
  c.destroy(); // x
});
// myService.source$.complete(); // x

console.log('re-created Component');

setTimeout(() => {
  myService.source$.next(1);
  // myService.source$.complete(); // x
  console.log('done. waiting 20 more seconds.');

  setTimeout(() => {
    console.log('done.');
  }, 20000);
}, 30000);
