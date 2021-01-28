import {receiveMessageOnPort} from "worker_threads";

export interface reactor {
  shouldApply(arg: string): boolean;
  apply(arg: string) : string;
}

class Bob {
  private reactors: reactor[];

  constructor(reactors: reactor[]) {
    this.reactors = reactors;
  }
  hey(arg1: string) : string {
    for (const reactor of this.reactors) {
      if (reactor.shouldApply(arg1)) {
        return reactor.apply(arg1);
      }
    }
    // yelling if all caps
    if (this.isYelling(arg1)) {

      if (this.isAskingQuestion(arg1)) {
        return "Calm down, I know what I'm doing!"
      }
      return 'Whoa, chill out!';
    } else {
      return 'Whatever.';
    }
  }

  private isYelling(arg1: string) {
    return arg1.toUpperCase() === arg1 && this.isAWord(arg1);
  }

  private isAWord(arg1: string) {
    return /[A-Za-z]+/.test(arg1);
  }

  private isAskingQuestion(arg1: string) {
    return arg1.charAt(arg1.length - 1) === '?';
  }
}

export default Bob;
