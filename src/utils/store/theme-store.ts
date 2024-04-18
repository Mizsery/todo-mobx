import { makeAutoObservable } from 'mobx';

type ThemeType = 'dark' | 'light';

export default class ThemeStore {
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  isDarkMode = () => {
    this.theme === 'dark' ? (this.theme = 'light') : (this.theme = 'dark');
  };
}
