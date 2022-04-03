<template>

</template>

<script>
import { Axios } from '@/api/axios'

export default {
  props: {
    marketerData: [],
  },
  methods: {
  },
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons

    }
  },
}
</script>
