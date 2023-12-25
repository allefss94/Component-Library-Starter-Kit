import type { Meta, StoryObj } from '@storybook/vue3'
import Pagination from './Pagination.vue'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: {
      type: "number",
      defaultValue: 10,
      description: 'Numero total de Itens',
    },
    defaultPage: {
      type: "number",
      defaultValue: 1,
      description: 'Item selecionado ao iniciar o componente',
    },
    showEdges: {
      type: 'boolean',
      defaultValue: true,
      description: 'Se deve mostrar o Primeiro e/ou ultimo item da lista'
    },
    siblingCount: {
      type: 'number',
      defaultValue: 1,
      description: 'Quantidade de itens ao lado(esquerda e direita) do item selecionado'
    }
  }
}
export default meta

type Story = StoryObj<typeof Pagination> 

export const Base: Story = {
  render:(args) => ({
    components: {Pagination},
    setup() {
      return { args }
    },
    template: '<Pagination v-bind="args" />'
  })
}