/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
export default class Collapse {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.element = element;
    this.content = this.element.querySelector('.content');
    this.button = this.element.querySelector('.collapse-btn');
    this.button.addEventListener('click', this.showContent.bind(this));
  }

  showContent() {
    this.content.classList.toggle('content-hidden');
  }
}
