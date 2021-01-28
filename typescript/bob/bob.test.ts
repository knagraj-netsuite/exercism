import Bob from './bob'

describe('Bob', () => {
  const bob = new Bob()

  it('stating something', () => {
    const result = bob.hey('Tom-ay-to, tom-aaaah-to.')
    expect(result).toEqual('Whatever.')
  })

  it('shouting', () => {
    const result = bob.hey('WATCH OUT!')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('shouting gibberish', () => {
    const result = bob.hey('FCECDFCAAB')
    expect(result).toEqual('Whoa, chill out!')
  })

  it('asking a question', () => {
    const result = bob.hey('Does this cryogenic chamber make me look fat?')
    expect(result).toEqual('Sure.')
  })

  xit('asking a numeric question', () => {
    const result = bob.hey('You are, what, like 15?')
    expect(result).toEqual('Sure.')
  })

  xit('asking gibberish', () => {
    const result = bob.hey('fffbbcbeab?')
    expect(result).toEqual('Sure.')
  })

  xit('talking forcefully', () => {
    const result = bob.hey("Let's go make out behind the gym!")
    expect(result).toEqual('Whatever.')
  })

  xit('using acronyms in regular speech', () => {
    const result = bob.hey("It's OK if you don't want to go to the DMV.")
    expect(result).toEqual('Whatever.')
  })

  xit('forceful question', () => {
    const result = bob.hey('WHAT THE HELL WERE YOU THINKING?')
    expect(result).toEqual("Calm down, I know what I'm doing!")
  })

  xit('shouting numbers', () => {
    const result = bob.hey('1, 2, 3 GO!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('no letters', () => {
    const result = bob.hey('1, 2, 3')
    expect(result).toEqual('Whatever.')
  })

  xit('question with no letters', () => {
    const result = bob.hey('4?')
    expect(result).toEqual('Sure.')
  })

  xit('shouting with special characters', () => {
    const result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting with no exclamation mark', () => {
    const result = bob.hey('I HATE THE DMV')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('statement containing question mark', () => {
    const result = bob.hey('Ending with ? means a question.')
    expect(result).toEqual('Whatever.')
  })

  xit('prattling on', () => {
    const result = bob.hey('Wait! Hang on.  Are you going to be OK?')
    expect(result).toEqual('Sure.')
  })

  xit('silence', () => {
    const result = bob.hey('')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('prolonged silence', () => {
    const result = bob.hey('   ')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('alternate silence', () => {
    const result = bob.hey('\t\t\t\t\t\t\t\t\t\t')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('multiple line question', () => {
    const result = bob.hey(
      '\nDoes this cryogenic chamber make me look fat?\nNo.'
    )
    expect(result).toEqual('Whatever.')
  })

  xit('starting with whitespace', () => {
    const result = bob.hey('         hmmmmmmm...')
    expect(result).toEqual('Whatever.')
  })

  xit('ending with whitespace', () => {
    const result = bob.hey('Okay if like my  spacebar  quite a bit?   ')
    expect(result).toEqual('Sure.')
  })

  xit('other whitespace', () => {
    const result = bob.hey('\n\r \t')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('non-question ending with whitespace', () => {
    const result = bob.hey('This is a statement ending with whitespace      ')
    expect(result).toEqual('Whatever.')
  })
})
