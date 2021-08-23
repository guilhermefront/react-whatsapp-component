import React from 'react';
import { Story } from '@storybook/react';
import { WhatsApp, WhatsAppProps } from '../src';

export default {
  title: 'Whatsapp',
  component: WhatsApp,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template: Story<WhatsAppProps> = (args) => <WhatsApp {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
