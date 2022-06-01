export default class PromiseQuene {
  private quene: (() => Promise<void>)[];
  // public add: (func: () => Promise<any>) => void;
  // private rm: () => void;
  constructor() {
    this.quene = [];
  }

  private rm(): void {
    this.quene.shift();
    if (this.quene.length > 0) {
      this.quene[0]()
        .then(() => {
          this.rm();
        })
        .catch(() => {
          this.rm();
        });
    } else {
    }
  }
  public add(func: () => Promise<any>): void {
    this.quene.push(func);
    if (this.quene.length === 1) {
      this.quene[0]()
        .then(() => {
          this.rm();
        })
        .catch(() => {
          this.rm();
        });
    }
  }
}
