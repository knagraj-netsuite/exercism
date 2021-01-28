class Bob {
  hey(arg1: string) : string {
    // yelling if all caps
    if (arg1.toUpperCase() === arg1) {
      return 'Whoa, chill out!';
    } else if (arg1.charAt(arg1.length - 1) === '?') {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  }
}

export default Bob
