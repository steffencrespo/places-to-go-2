import { PlacesToGo2Page } from './app.po';

describe('places-to-go2 App', function() {
  let page: PlacesToGo2Page;

  beforeEach(() => {
    page = new PlacesToGo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
