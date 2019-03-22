<template>
  <div class="home">
    <TextEditor msg="Text Editor" />
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from "@/components/TextEditor.vue";

export default {
  name: "home",
  components: {
    TextEditor
  }
};
</script>
