<template>
  <base-dialog v-if="isValidate" title="Invalid Input!" @close="confirmError">
    <template #default>
      <p>Please input full information</p>
    </template>
    <template #action>
      <base-button @click="confirmError">yes</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" name="title" ref="titleRef" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          ref="descriptionRef"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="text" name="link" ref="linkRef" />
      </div>
      <div class="form-control">
        <base-button type="submit" mode="flat">submit</base-button>
        <base-button mode="flat">cancel</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  props: {},
  data() {
    return {
      resource: {
        id: Date.now(),
        title: '',
        description: '',
        link: '',
      },
      isValidate: false,
    };
  },
  methods: {
    submitForm() {
      const { titleRef, descriptionRef, linkRef } = this.$refs;
      if (
        titleRef.value === '' ||
        descriptionRef.value === '' ||
        linkRef.value === ''
      ) {
        this.isValidate = true;
        return;
      }
      const payload = {
        title: titleRef.value,
        description: descriptionRef.value,
        link: linkRef.value,
      };
      this.addResource(payload);
    },
    confirmError() {
      this.isValidate = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
