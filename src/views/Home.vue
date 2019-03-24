<template>
  <div class="home">
    <Welcome msg="Text Editor" v-show="!sessionAlive" />
    <TextEditor v-show="sessionAlive" />
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from "@/components/TextEditor.vue";
import Welcome from "@/components/Welcome.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    TextEditor,
    Welcome
  },
  computed: {
    ...mapGetters(["sessionAlive"])
  }
};
</script>
