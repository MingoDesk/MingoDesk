<template>
  <div class="app-home">
    <component :is="route" />
  </div>
</template>

<script>
import { Staff, StaffAdmin, SysAdmin } from '../@types/userPermissions';
import { defineComponent, computed } from 'vue';
import { check } from '../helpers/getNav';
import { userPermissions } from '../helpers/store/userStore';
import Unassigned from './Unassigned.vue';
import YourTickets from './Your-tickets.vue';

export default defineComponent({
  name: 'App home',
  components: {
    YourTickets,
  },
  data() {
    const route = computed(() => {
      if (check(userPermissions.value, SysAdmin.permissions)) return Unassigned;
      if (check(userPermissions.value, StaffAdmin.permissions)) return Unassigned;
      if (check(userPermissions.value, Staff.permissions)) return Unassigned;
      return YourTickets;
    });
    return { route };
  },
});
</script>
