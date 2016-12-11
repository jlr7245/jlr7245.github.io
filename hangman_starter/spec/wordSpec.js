describe('Word', () => {
	let word;

	beforeEach(() => {
		word = new Word('WDI');
	});

	describe('#new', () => {
		it('sets letters to an empty array', () => {
			expect(word.letters instanceof Array).toEqual(true)
		});

		it('calls getLetters() method, passing in word argument', () => {
			expect(word.letters.length).toEqual(3)
		})
	});

	describe('#getLetters', () => {
		it('creates new letter objects and stores them in the letters array', () => {
			expect(word.letters[0] instanceof Letter).toEqual(true);
		});

		it('pushes one letter for each letter object in the function argument', () => {
			expect(word.letters.length).toEqual(3);
		});
	});

	describe('#isFound', () => {
		it('returns false if all the letters have not been found', () => {
			expect(word.isFound()).toEqual(false);
		});

		it('returns true if all of the letters have been found', () => {
			word.letters[0].show();
			word.letters[1].show();
			word.letters[2].show();
			expect(word.isFound()).toEqual(true);
		});
	});

	describe('#try', () => {
		it('shows the guessed letter if it is in the word', () => {
			word.try('W');
			expect(word.letters[0].hidden).toEqual(false);
		});

		it('does not reveal the letter if it is not present', () => {
			word.try('X');
			expect(word.letters[0].hidden).toEqual(true);
		});

		it('returns a true if the letter was found', () => {
			expect(word.try('W')).toEqual(true)
		});

		it('returns false if the letter was not found', () => {
			expect(word.try('X')).toEqual(false);
		})
	});

	describe('#render', () => {
		it('returns the current state of the word', () => {
			word.try('W');
			word.try('D');
			expect(word.render()).toEqual('W D _');
		});
	});
});
