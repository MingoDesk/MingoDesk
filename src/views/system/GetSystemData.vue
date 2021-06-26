<template>
  <section class="system-settings">
    <div v-if="fetching"><h2>Sending...</h2></div>
    <div v-else-if="!fetching" class="result">
      <ul>
        <p>The system settings are:</p>
        <p>{{ data.data }}</p>
        <p>
          Allow notes edit:
          {{ data.data.allowNotesEdit }}
        </p>
        <p>
          Allow users to see ticket status:
          {{ data.data.allowUserSeeTicketStatus }}
        </p>
        <p>
          Average user satisfaction:
          {{ data.data.avgUserSatisfaction }}
        </p>
        <p>
          Default theme:
          {{ data.data.defaultTheme }}
        </p>
        <p>
          Preferred data type:
          {{ data.data.prefDataType }}
        </p>
        <p>
          Snoozing enabled:
          {{ data.data.snoozing }}
        </p>
      </ul>
    </div>
  </section>
</template>

<script>
import { getAppSettings } from "../../composables/systemController";

export default {
  setup() {
    const { data, error, submitted, fetching } = getAppSettings();

    (async () => {
      await submitted();
    })();

    return {
      data,
      error,
      fetching,
    };
  },
};
</script>

<style></style>
