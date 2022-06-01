export default class promiseQuene {
  private quene: (() => Promise<void>)[];
  public add: (func: () => Promise<any>) => void;
  public rm: () => void;
  constructor() {
    this.quene = [];
  }
}
function QueueRm() {
  this.quene.shift();
  if (this.quene.length > 0) {
    this.quene[0].func().finally(() => {
      QueueRm();
    });
  } else {
  }
}
function add(func: () => Promise<void>) {
  this.quene.push(func);
  if (this.quene.length === 1) {
    func().finally(() => {
      QueueRm();
    });
  }
}
