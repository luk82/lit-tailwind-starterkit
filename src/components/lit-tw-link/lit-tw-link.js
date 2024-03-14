import { TWStyles } from './../../../static/twlit.js';
import { LitElement, html } from 'lit';

export class LitTwLink extends LitElement {
  static get styles() {
    return [TWStyles];
  }

  static get properties() {
    return {
      link: { type: String },
      variant: { type: String },
      hasArrow: { type: Boolean },
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     * @default '#'
     */
    this.link = '#';
    /**
     * @type {string}
     * @default 'primary'
     * @example 'primary', 'primary-2', 'primary-3', 'secondary', 'complex'
     */
    this.variant = 'primary';
    /**
     * @type {boolean}
     * @default false
     */
    this.hasArrow = false;
  }

  /**
   * Display arrow
   * @returns {*}
   */
  displayArrow() {
    return this.hasArrow
      ? html`<span aria-hidden="true" class="ml-2">&rarr;</span>`
      : '';
  }

  /**
   * Theme link
   * @returns {string}
   */
  themeLink() {
    const classes = [
      'bg-[var(--link-bg)] text-[var(--link-text)] hover:text-[var(--link-text-hover)] hover:bg-[var(--link-bg-hover)] transition-all duration-200 justify-center items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800',
    ];

    this.variant === 'primary'
      ? classes.push('text-sm px-3.5 py-2.5 font-semibold leading-6')
      : '';
    this.variant === 'secondary'
      ? classes.push(
          'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
        )
      : '';

    return classes.join(' ');
  }

  themeIconSlot() {
    const classes = [];

    // Check if slot icon is not empty, if so add hasIconClasses
    if (this.querySelector('[slot="icon"]')) {
      classes.push('flex mr-[var(--link-icon-margin)]');
    }
    return classes.join(' ');
  }

  render() {
    return this.variant !== 'complex'
      ? html`<a href="${this.link}" class="${this.themeLink()}"
          ><slot name="icon" class=${this.themeIconSlot()}></slot>
          <slot></slot>${this.displayArrow()}</a
        >`
      : html`<div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="${this.themeLink()} relative rounded-full px-5 py-3 text-sm leading-6 ring-1 ring-gray-900/10"
          >
            <slot></slot>
            <a href="${this.link}" class="group font-semibold"
              ><span class="absolute inset-0" aria-hidden="true"></span
              ><span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>`;
  }
}

customElements.define('lit-tw-link', LitTwLink);
