import { html } from 'lit';
import { LitTwLink } from '../../src/components/lit-tw-link/lit-tw-link.js';

describe('Link Component', () => {
  beforeEach(() => {
    cy.mount<'lit-tw-link'>(
      html`<lit-tw-link variant="primary" link="#"><span slot="icon"><img
      src="/static/images/rocket-svgrepo-com.svg" width="20px" height="20px" />Link Label</lit-tw-link>`
    );
  });

  it('should render a link', () => {
    cy.get('lit-tw-link').should('exist');
    cy.get('lit-tw-link').should('have.attr', 'link', '#');
  });

  it('should have a label', () => {
    cy.get('lit-tw-link').should('exist');
    cy.get('lit-tw-link').should('have.text', 'Link Label');
  });
});
