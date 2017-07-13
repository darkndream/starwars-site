import { StarWarsSitePage } from './app.po';

describe('star-wars-site App', () => {
  let page: StarWarsSitePage;

  beforeEach(() => {
    page = new StarWarsSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
