<template>
  <router-view />
</template>

<script>
import { Notify, useQuasar } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  created() {
    if (this.$q.localStorage.has(`${this.$project}.settings.darkMode`)) {
      this.$q.dark.set(this.$q.localStorage.getItem(`${this.$project}.settings.darkMode`));
    } else {
      this.$q.dark.set("auto");
    }
    if (this.$q.platform.is.mobile) {
      this.$q.fullscreen.request();
    }
    if (this.$q.localStorage.has(`${this.$project}.settings.language`)) {
      this.$i18n.locale = this.$q.localStorage.getItem(`${this.$project}.settings.language`);
    } else {
      this.$i18n.locale = this.$q.lang.getLocale();
    }
  },
  methods: {}
});
</script>
