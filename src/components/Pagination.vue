<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
import { computed, defineModel as localDefineModel } from 'vue';

interface Props {
  total: number
  itemsPerPage: number
  defaultPage?: number
  showEdges?:boolean
  siblingCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  total:1,
  itemsPerPage: 1,
  defaultPage: 1,
  siblingCount: 1,
})

const page = localDefineModel<number>('page')


</script>

<template>
  
  <PaginationRoot class="pagination" v-model:page="page" :items-per-page="itemsPerPage" :total="total" :sibling-count="siblingCount" :show-edges="showEdges"  :default-page="defaultPage">
    <PaginationList v-slot="{ items }" class="pagination__list">
      <PaginationFirst class="pagination__list__first">
        <slot name="fist-page-icon">
          <Icon icon="radix-icons:double-arrow-left" />
        </slot>
      </PaginationFirst>
      <PaginationPrev class="pagination__list__prev">
        <slot name="previous-page-icon">
          <Icon icon="radix-icons:chevron-left" />
        </slot>
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="pagination__list__item" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="pagination__list__ellipsis">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext class="pagination__list__next">
        <slot name="next-page-icon">
          <Icon icon="radix-icons:chevron-right" />
        </slot>
      </PaginationNext>
      <PaginationLast class="pagination__list__last">
        <slot name="last-page-icon">
          <Icon icon="radix-icons:double-arrow-right" />
        </slot>
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>