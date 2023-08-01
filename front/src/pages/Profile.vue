<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="row q-mb-md"></div>
  <div class="row q-mb-lg">
    <div class="col-md-6 col-lg-6 col-xs-12 text-center">
      <q-card flat>
        <span class="text-h4"
          >Bienvenue dans <br />
          Info Cheat</span
        >
        <q-card-section class="q-pl-md text-h7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
        <q-card-section class="q-pl-md text-h7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
        <q-card-section>
          <q-btn class="text-h7 bg-red glossy" rounded no-caps>Read More</q-btn>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 q-pr-md">
      <q-card flat bordered style="border-radius: 1em" class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 q-pa-md col-xs-12 col-lg-12">
      <q-card style="border-radius: 1em">
        <q-splitter v-model="splitterModel" style="height: 200px">
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">Before</div>
              <div class="q-my-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </div>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">After</div>
              <div class="q-my-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </div>
            </div>
          </template>
        </q-splitter>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      splitterModel: ref(50), // start at 50%
    };
  },
});
</script>
<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
