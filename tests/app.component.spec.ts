import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should have title Hello, Angular Service!', () => {
    const app = new AppComponent();
    expect(app.title).toEqual('Hello, Angular Service!');
  });
});
