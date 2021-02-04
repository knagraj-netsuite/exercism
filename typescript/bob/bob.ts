export interface IReactor {
  shouldApply(arg: string): boolean;
  apply(arg: string) : string;
}

class Bob {
  private reactors: IReactor[];

  constructor(reactors: IReactor[]) {
    this.reactors = reactors;
  }
  hey(arg1: string) : string {
    for (const reactor of this.reactors) {
      if (reactor.shouldApply(arg1)) {
        return reactor.apply(arg1);
      }
    }
    return "Whatever.";
  }
}

export default Bob;
