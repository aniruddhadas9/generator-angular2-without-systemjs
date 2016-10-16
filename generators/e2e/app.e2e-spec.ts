import { NgAngular214octPage } from './app.po';

describe('ng-angular2-14oct App', function() {
  let page: NgAngular214octPage;

  beforeEach(() => {
    page = new NgAngular214octPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
