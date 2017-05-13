import { NgResumeBuilderPage } from './app.po';

describe('ng-resume-builder App', () => {
  let page: NgResumeBuilderPage;

  beforeEach(() => {
    page = new NgResumeBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
