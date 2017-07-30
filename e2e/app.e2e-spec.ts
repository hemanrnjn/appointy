import { AppointyPage } from './app.po';

describe('appointy App', () => {
  let page: AppointyPage;

  beforeEach(() => {
    page = new AppointyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
