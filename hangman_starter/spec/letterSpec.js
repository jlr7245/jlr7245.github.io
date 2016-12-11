describe('Letter', () => {
	let letter;
 
	beforeEach(() => {
		letter = new Letter('A');
	});

	describe('#new', () => {
		it('sets the proper attributes (value, which is passed in, and hidden)', () => {
			expect(letter.value).toEqual('A');
			expect(letter.hidden).toEqual(true);
		});
	});

	describe('#show', () =>	{
		it('sets the value of hidden to false', () => {
			letter.show();
			expect(letter.hidden).toEqual(false);
		});
	});

	describe('#render', () => {
		it('returns "_" if the letter is hidden', () => {
			expect(letter.render()).toEqual('_');
		});

		it('returns the value of the letter if is has been guessed', () => {
			letter.show();
			expect(letter.render()).toEqual('A');
		});
	});
});
