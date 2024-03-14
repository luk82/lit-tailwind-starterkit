import { html } from 'lit';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './lit-tw-link.js';

export default {
  title: 'DS-TW-Link',
  component: 'ds-tw-link',
  argTypes: {
    link: { control: 'text' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      default: 'primary',
      defaultValue: 'primary',
    },
    text: { control: 'text' },
  },
};

const Template = ({ link, variant, text, svgIcon }) => html`
  <lit-tw-link variant=${variant} link=${link}>${svgIcon}${text}</lit-tw-link>
`;

export const Primary = Template.bind({});
Primary.args = {
  link: '#',
  variant: 'primary',
  text: 'Link label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  link: '#',
  variant: 'secondary',
  text: 'Link label',
};

export const Complex = Template.bind({});
Complex.args = {
  link: '#',
  variant: 'complex',
  text: 'Link label',
  svgIcon: html`<span slot="icon"
    ><img src="/static/images/rocket-svgrepo-com.svg"
  /></span>`,
};
