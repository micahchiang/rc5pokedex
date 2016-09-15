export class PokedexPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pokedex-app h1')).getText();
  }
}
