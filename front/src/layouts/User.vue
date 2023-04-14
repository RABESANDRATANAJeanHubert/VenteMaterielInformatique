<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="bg-white">
      <q-toolbar class="text-black">
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title> CPP-SYSTEM </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="text-black">
        <q-route-tab
          icon="map"
          to="profile"
          replace
          label="Acceuil"
          active-class="text-negative"
        />
        <q-route-tab
          icon="assignment"
          to="about"
          replace
          label="Nous connaitre"
          active-class="text-negative"
        />
        <q-route-tab
          icon="assignment"
          to="news"
          replace
          label="Actualité"
          active-class="text-negative"
        />
        <q-route-tab
          icon="assignment"
          to="entreprise"
          replace
          label="Pour les entreprise"
          active-class="text-negative"
        />
      </q-tabs>
      <q-separator></q-separator>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab icon="assignment" to="posts" replace label="Other Tab" />
      </q-tabs>

      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title> Footer </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'LayoutName',

  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
});
</script>
