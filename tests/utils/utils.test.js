import { should } from 'chai';

import { getSlug, getIdFromSlug } from 'src/utils';

should();

describe('utils', () => {
  describe('getSlug', () => {
    it('is a function', () => {
      getSlug.should.to.be.a('function');
    });
    it('returns a string', () => {
      getSlug('jojo le fou', '').should.to.be.a('string');
    });
    it('works with a parameter ID as a number', () => {
      getSlug('jojo le fou', 1).should.equal('jojo-le-fou-1');
    });
    it('replaces spaces', () => {
      getSlug('   jojo le fou   ', '   a1c2b   ').should.equal('jojo-le-fou-a1c2b');
    });
    it('replaces special characters', () => {
      getSlug('jôjô le fòu', 'à1c2b').should.equal('jojo-le-fou-a1c2b');
    });
    it('lowers all characters', () => {
      getSlug('JOJO le Fou', 'A23bC8').should.equal('jojo-le-fou-a23bc8');
    });
    it('does the job', () => {
      getSlug('    JôJô LE Fou    ', 525).should.equal('jojo-le-fou-525');
    });
  });

  describe('getIdFromSlug', () => {
    it('is a function', () => {
      getIdFromSlug.should.to.be.a('function');
    });
    it('returns a string', () => {
      getIdFromSlug('jojo-le-fou-a1c2b').should.to.be.a('string');
    });
    it('works with an empty slug', () => {
      getIdFromSlug('').should.equal('NO_ID');
    });
    it('works with a slug without the char "-" delimiter', () => {
      getIdFromSlug('jojo').should.equal('NO_ID');
    });
    it('works with a slug with only the char "-" delimiter and spaces around', () => {
      getIdFromSlug('   -   ').should.equal('NO_ID');
    });
    it('does the job', () => {
      getIdFromSlug('jojo-le-fou-a23bc8').should.equal('a23bc8');
    });
  });
});
