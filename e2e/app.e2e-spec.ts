import { AngularClassDictionaryPage } from './app.po';

describe('angular-class-dictionary App', () => {
  let page: AngularClassDictionaryPage;

  beforeEach(() => {
    page = new AngularClassDictionaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
