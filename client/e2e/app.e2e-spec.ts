import { TwitterAngularTestPage } from './app.po';

describe('twitter-angular-test App', () => {
  let page: TwitterAngularTestPage;

  beforeEach(() => {
    page = new TwitterAngularTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
