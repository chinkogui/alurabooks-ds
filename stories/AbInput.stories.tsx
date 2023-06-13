import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AbInput, AbInputProps } from '../src';

export default {
  title: 'Components/AbInput',
  component: AbInput,
  argTypes: {
    label: {
      control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInput>

const Template: ComponentStory<typeof AbInput> = (args) => <AbInput {...args} />

export const Texto = Template.bind({});
export const Email = Template.bind({});
export const Password = Template.bind({});
export const Date = Template.bind({});

Texto.args = {
  type: 'text',
  label: 'Nome',
  placeholder: 'Digite seu nome'
} as AbInputProps

Email.args = {
  type: 'email',
  label: 'E-mail',
  placeholder: 'seuemail@maneiro.com.br'
} as AbInputProps

Password.args = {
  type: 'password',
  label: 'Senha',
  placeholder: 'Digite sua senha'
} as AbInputProps

Date.args = {
  type: 'date',
  label: 'Data de nascimento',
} as AbInputProps
