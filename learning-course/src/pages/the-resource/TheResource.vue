<template>
  <base-card>
    <base-button @click="setSelectTab('store-resource')" :mode="btnStore"
      >Stored Resource</base-button
    >
    <base-button @click="setSelectTab('add-resource')" :mode="btnAdd"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selecedTab"></component>
</template>

<script>
import StoreResource from '../store-resource/StoreResource.vue';
import AddResource from '../add-resource/AddResource.vue';

export default {
  components: {
    StoreResource,
    AddResource,
  },
  props: {},
  data() {
    return {
      selecedTab: 'store-resource',
      storedResource: [
        {
          id: Date.now(),
          title: 'Nodjs',
          description: 'master nodejs',
          link: 'https://nodejs.org',
        },
        {
          id: Date.now(),
          title: 'ReatJS',
          description: 'master ReatJS',
          link: 'https://reactjs.org',
        },
        {
          id: Date.now(),
          title: 'VueJS',
          description: 'master VueJS',
          link: 'https://vuejs.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelectTab(val) {
      this.selecedTab = val;
    },
    addResource(resource) {
      this.storedResource.unshift(resource);
      this.selecedTab = 'store-resource';
    },
    deleteResource(id) {
      const findIdx = this.storedResource.findIndex((item) => item.id === id);
      if (findIdx === -1) return;
      this.storedResource.splice(findIdx, 1);
    },
  },
  computed: {
    btnStore() {
      return this.selecedTab === 'store-resource' ? null : 'flat';
    },
    btnAdd() {
      return this.selecedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>

<style scoped></style>
