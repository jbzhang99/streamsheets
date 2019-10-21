const { StreamSheet } = require('../..');
const { createTerm } = require('./utils');
// const ERROR = require('../../src/functions/errors');

describe('colors', () => {
	describe('convert from cmyk', () => {
		it('should convert to hex', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,0,50", "cmyk", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("(0,0,0,50)", "cmyk", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("cmyk(0,0,0,50)", "cmyk", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("0,0,0,0", "cmyk", "hex")', sheet).value).toBe('FFFFFF');
			expect(createTerm('color.convert("100,100,100,100", "cmyk", "hex")', sheet).value).toBe('000000');
			expect(createTerm('color.convert("101,101,101,101", "cmyk", "hex")', sheet).value).toBe('000000');
			expect(createTerm('color.convert("95,0,80,6", "cmyk", "hex")', sheet).value).toBe('0CF030');
		});
		it('should convert to hsl', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,0,50", "cmyk", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("(0,0,0,50)", "cmyk", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("cmyk(0,0,0,50)", "cmyk", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("0,0,0,0", "cmyk","hsl")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("100,100,100,100", "cmyk", "hsl")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("101,101,101,101", "cmyk", "hsl")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("95,0,80,6", "cmyk", "hsl")', sheet).value).toBe('129,90,49');
		});
		it('should convert to hsv', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,0,50", "cmyk", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("(0,0,0,50)", "cmyk", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("cmyk(0,0,0,50)", "cmyk", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("0,0,0,0", "cmyk","hsv")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("100,100,100,100", "cmyk", "hsv")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("101,101,101,101", "cmyk", "hsv")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("95,0,80,6", "cmyk", "hsv")', sheet).value).toBe('129,95,94');
		});
		it('should convert to rgb', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,0,50", "cmyk", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("(0,0,0,50)", "cmyk", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("cmyk(0,0,0,50)", "cmyk", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("0,0,0,0", "cmyk", "rgb")', sheet).value).toBe('255,255,255');
			expect(createTerm('color.convert("100,100,100,100", "cmyk", "rgb")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("101,101,101,101", "cmyk", "rgb")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("95,0,80,6", "cmyk", "rgb")', sheet).value).toBe('12,240,48');
		});
		it('should convert to cmyk', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("cmyk(0,0,0,50)", "cmyk", "cmyk")', sheet).value).toBe('0,0,0,50');
		});
	});
	describe('convert from hex', () => {
		it('should convert to cmyk', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("808080", "hex", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("#808080", "hex", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("000000", "hex", "cmyk")', sheet).value).toBe('0,0,0,100');
			expect(createTerm('color.convert("FFFFFF", "hex", "cmyk")', sheet).value).toBe('0,0,0,0');
			expect(createTerm('color.convert("0CF030", "hex", "cmyk")', sheet).value).toBe('95,0,80,6');
		});
		it('should convert to hsl', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("808080", "hex", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("#808080", "hex", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("000000", "hex", "hsl")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("FFFFFF", "hex", "hsl")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("0CF030", "hex", "hsl")', sheet).value).toBe('129,90,49');
		});
		it('should convert to hsv', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("808080", "hex", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("#808080", "hex", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("000000", "hex", "hsv")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("FFFFFF", "hex", "hsv")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("0CF030", "hex", "hsv")', sheet).value).toBe('129,95,94');
		});
		it('should convert to rgb', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("808080", "hex", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("#808080", "hex", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("000000", "hex", "rgb")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("FFFFFF", "hex", "rgb")', sheet).value).toBe('255,255,255');
			expect(createTerm('color.convert("0CF030", "hex", "rgb")', sheet).value).toBe('12,240,48');
		});
	});
	describe('convert from hsl', () => {
		it('should convert to cmyk', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsl", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("(0,0,50)", "hsl", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("hsl(0,0,50)", "hsl", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("0,0,0", "hsl", "cmyk")', sheet).value).toBe('0,0,0,100');
			expect(createTerm('color.convert("360,100,100", "hsl", "cmyk")', sheet).value).toBe('0,0,0,0');
			expect(createTerm('color.convert("361,101,101", "hsl", "cmyk")', sheet).value).toBe('0,0,0,0');
			expect(createTerm('color.convert("129,95,94", "hsl", "cmyk")', sheet).value).toBe('11,0,9,0');
		});
		it('should convert to hex', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsl", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("(0,0,50)", "hsl", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("hsl(0,0,50)", "hsl", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("0,0,0", "hsl", "hex")', sheet).value).toBe('000000');
			expect(createTerm('color.convert("360,100,100", "hsl", "hex")', sheet).value).toBe('FFFFFF');
			expect(createTerm('color.convert("361,101,101", "hsl", "hex")', sheet).value).toBe('FFFFFF');
			expect(createTerm('color.convert("129,95,94", "hsl", "hex")', sheet).value).toBe('E1FEE6');
		});
		it('should convert to hsv', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsl", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("(0,0,50)", "hsl", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("hsl(0,0,50)", "hsl", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("0,0,0", "hsl", "hsv")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("360,100,100", "hsl", "hsv")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("361,101,101", "hsl", "hsv")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("129,95,94", "hsl", "hsv")', sheet).value).toBe('130,11,100');
		});
		it('should convert to rgb', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsl", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("(0,0,50)", "hsl", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("hsl(0,0,50)", "hsl", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("0,0,0", "hsl", "rgb")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("360,100,100", "hsl", "rgb")', sheet).value).toBe('255,255,255');
			expect(createTerm('color.convert("361,101,101", "hsl", "rgb")', sheet).value).toBe('255,255,255');
			expect(createTerm('color.convert("129,95,94", "hsl", "rgb")', sheet).value).toBe('225,254,230');
		});
		it('should convert to hsl', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("hsl(0,0,50)", "hsl", "hsl")', sheet).value).toBe('0,0,50');
		});
	});
	describe('convert from hsv', () => {
		it('should convert to cmyk', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsv", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("(0,0,50)", "hsv", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("hsv(0,0,50)", "hsv", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("0,0,0", "hsv", "cmyk")', sheet).value).toBe('0,0,0,100');
			expect(createTerm('color.convert("360,100,100", "hsv", "cmyk")', sheet).value).toBe('0,100,100,0');
			expect(createTerm('color.convert("361,101,101", "hsv", "cmyk")', sheet).value).toBe('0,100,100,0');
			expect(createTerm('color.convert("129,95,94", "hsv", "cmyk")', sheet).value).toBe('95,0,81,6');
		});
		it('should convert to hex', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsv", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("(0,0,50)", "hsv", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("hsv(0,0,50)", "hsv", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("0,0,0", "hsv", "hex")', sheet).value).toBe('000000');
			expect(createTerm('color.convert("360,100,100", "hsv", "hex")', sheet).value).toBe('FF0000');
			expect(createTerm('color.convert("361,101,101", "hsv", "hex")', sheet).value).toBe('FF0000');
			expect(createTerm('color.convert("129,95,94", "hsv", "hex")', sheet).value).toBe('0CF02E');
		});
		it('should convert to hsl', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsv", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("(0,0,50)", "hsv", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("hsv(0,0,50)", "hsv", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("0,0,0", "hsv", "hsl")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("360,100,100", "hsv", "hsl")', sheet).value).toBe('0,100,50');
			expect(createTerm('color.convert("361,101,101", "hsv", "hsl")', sheet).value).toBe('0,100,50');
			expect(createTerm('color.convert("129,95,94", "hsv", "hsl")', sheet).value).toBe('129,90,49');
		});
		it('should convert to rgb', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("0,0,50", "hsv", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("(0,0,50)", "hsv", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("hsv(0,0,50)", "hsv", "rgb")', sheet).value).toBe('128,128,128');
			expect(createTerm('color.convert("0,0,0", "hsv", "rgb")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("360,100,100", "hsv", "rgb")', sheet).value).toBe('255,0,0');
			expect(createTerm('color.convert("361,101,101", "hsv", "rgb")', sheet).value).toBe('255,0,0');
			expect(createTerm('color.convert("129,95,94", "hsv", "rgb")', sheet).value).toBe('12,240,46');
		});
		it('should convert to hsv', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("hsv(0,0,50)", "hsv", "hsv")', sheet).value).toBe('0,0,50');
		});
	});
	describe('convert from rgb', () => {
		it('should convert to cmyk', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("128,128,128", "rgb", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("(128,128,128)", "rgb", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("rgb(128,128,128)", "rgb", "cmyk")', sheet).value).toBe('0,0,0,50');
			expect(createTerm('color.convert("0,0,0", "rgb", "cmyk")', sheet).value).toBe('0,0,0,100');
			expect(createTerm('color.convert("255,255,255", "rgb", "cmyk")', sheet).value).toBe('0,0,0,0');
			expect(createTerm('color.convert("256,256,256", "rgb", "cmyk")', sheet).value).toBe('0,0,0,0');
			expect(createTerm('color.convert("12,240,48", "rgb", "cmyk")', sheet).value).toBe('95,0,80,6');
		});
		it('should convert to hex', () => {
			// TODO test with neg. values, 0 values, 255 values and 256 values...
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("128,128,128", "rgb", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("(128,128,128)", "rgb", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("rgb(128,128,128)", "rgb", "hex")', sheet).value).toBe('808080');
			expect(createTerm('color.convert("0,0,0", "rgb", "hex")', sheet).value).toBe('000000');
			expect(createTerm('color.convert("255,255,255", "rgb", "hex")', sheet).value).toBe('FFFFFF');
			expect(createTerm('color.convert("256,256,256", "rgb", "hex")', sheet).value).toBe('FFFFFF');
			expect(createTerm('color.convert("12,240,48", "rgb", "hex")', sheet).value).toBe('0CF030');
		});
		it('should convert to hsl', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("128,128,128", "rgb", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("(128,128,128)", "rgb", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("rgb(128,128,128)", "rgb", "hsl")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("0,0,0", "rgb", "hsl")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("255,255,255", "rgb", "hsl")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("256,256,256", "rgb", "hsl")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("12,240,48", "rgb", "hsl")', sheet).value).toBe('129,90,49');
		});
		it('should convert to hsv', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("128,128,128", "rgb", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("(128,128,128)", "rgb", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("rgb(128,128,128)", "rgb", "hsv")', sheet).value).toBe('0,0,50');
			expect(createTerm('color.convert("0,0,0", "rgb", "hsv")', sheet).value).toBe('0,0,0');
			expect(createTerm('color.convert("255,255,255", "rgb", "hsv")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("256,256,256", "rgb", "hsv")', sheet).value).toBe('0,0,100');
			expect(createTerm('color.convert("12,240,48", "rgb", "hsv")', sheet).value).toBe('129,95,94');
		});
		it('should convert to rgb', () => {
			const sheet = new StreamSheet().sheet;
			expect(createTerm('color.convert("128,128,128", "rgb", "rgb")', sheet).value).toBe('128,128,128');
		});
	});
});