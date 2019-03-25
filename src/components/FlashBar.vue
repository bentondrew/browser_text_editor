<template>
  <div id="flash_messaging">
    <flash-message id="textEditorFlashMessaging"></flash-message>
  </div>
</template>

<style scoped>
#flash_messaging {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  align-content: space-around;
}

.success.flash__message {
  display: flex;
}

.flash__message-content {
  padding-right: 10px;
}
</style>
