class Bob {
  hey(arg1: string) : string {
    // yelling if all caps
    if (arg1.toUpperCase() === arg1 && /[A-Za-z]+/.test(arg1)) {
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

  private isAskingQuestion(arg1: string) {
    return arg1.charAt(arg1.length - 1) === '?';
  }
}

export default Bob
