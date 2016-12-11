describe('Game', () => {
	let game;

	beforeEach(() => {
		game = new Game();
	});

	describe('#new', () => {
		it('sets up the proper attributes', () => {
			expect(game.guesses).toEqual(null);
			expect(game.guessedLetters).toEqual(null);
			expect(game.currentWord).toEqual(null);

		});
	});

	describe('#startGame', () => {
		beforeEach(() => {
			game.startGame('WDI');
		});

		it('sets guesses to 8', () => {
			expect(game.guesses).toEqual(8);
		});

		it('sets guessedLetters to an empty array', () => {
			expect(game.guessedLetters instanceof Array).toEqual(true);
		});

		it('sets currentWord to a word object', () => {
			expect(game.currentWord instanceof Word).toEqual(true);
		});
	});

	describe('#guess', () => {
		beforeEach(() => {
			game.startGame('WDI');
		});

		it('pushes guessed letter into guessedLetters array if it hasnt been guessed yet', () => {
			game.guess('W');
			expect(game.guessedLetters.includes('W')).toEqual(true);
		})

		it('decreases the number or remaining guesses if the letter is not found', () => {
			game.guess('X');
			expect(game.guesses).toEqual(7);
		});

		it('does not decrease the guesses if the letter is found', () => {
			game.guess('W');
			expect(game.guesses).toEqual(8);
		});
	});

	describe('#isOver', () => {
		beforeEach(() => {
			game.startGame('WDI');
		});

		it('returns true if guesses is 0', () => {
			game.guesses = 0;
			expect(game.isOver()).toEqual(true);
		});

		it('returns true if the word is found', () => {
			game.guess('W');
			game.guess('D');
			game.guess('I');
			expect(game.isOver()).toEqual(true);
		});
	});

	describe('#overMessage', () => {
		beforeEach(() => {
			game.startGame('WDI');
		});

		it('returns Sorry, you lost if guesses is 0', () => {
			game.guesses = 0;
			expect(game.overMessage()).toEqual('Sorry, you lost!');
		});

		it('returns YAY!! You won!! if the word has been found', () => {
			game.guess('W');
			game.guess('D');
			game.guess('I');
			expect(game.overMessage()).toEqual('YAY!! You won!!');
		});

		it('returns undefined if guesses > 0 && word has not been found', () => {
			expect(game.overMessage()).toEqual(undefined);
		});
	});
});
