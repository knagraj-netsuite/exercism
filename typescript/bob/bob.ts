class Bob {

  hey(arg1: string) : string {

    arg1 = this.sanitizeInput(arg1);

    if (this.isAddressedButNotSayingAnything(arg1)) {
      return 'Fine. Be that way!';
    } else if (this.isYelling(arg1)) {
      if (this.isAskingQuestion(arg1)) {
        return "Calm down, I know what I'm doing!"
      }
      return 'Whoa, chill out!';
    } else if (this.isAskingQuestion(arg1)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }

  }

  private sanitizeInput(arg1: string) {
    return arg1.trim();
  }

  private isAddressedButNotSayingAnything(arg1: string) {
    return arg1.length === 0;
  }

  private isYelling(arg1: string) {
    return arg1.toUpperCase() === arg1 && /[A-Za-z]+/.test(arg1);
  }

  private isAskingQuestion(arg1: string) {
    return arg1.charAt(arg1.length - 1) === '?';
  }
}

export default Bob
