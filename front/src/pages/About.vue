<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="row q-mb-md">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <q-list class="text-center">
        <q-item>
          <q-item-section>
            <q-item-label>LATEST NEWS</q-item-label>
            <q-item-label class="text-h6">mY LATEST NEWS</q-item-label>
            <q-item-label class="text-subtitle1"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.Secondary line text. Lorem ipsum dolor sit amet,
              consectetur adipiscit elit.Secondary line text. Lorem ipsum dolor
              sit amet, consectetur adipiscit elit.Secondary line text. Lorem
              ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="col-md-3"></div>
  </div>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-3">
        <q-img src="undraw_product_photography_91i2.png">
          <div class="absolute-bottom text-subtitle1 text-center">Thomas</div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="undraw_Segment_analysis_re_ocsl.png">
          <div class="absolute-top text-center">Severin</div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="undraw_empty_cart_co35.png">
          <div class="absolute-bottom">Andry</div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="undraw_feeling_proud_qne1.png">
          <div class="absolute-full text-subtitle2 flex flex-center">Finel</div>
        </q-img>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-3">
        <q-img src="undraw_Cloud_hosting_7xb1.png">
          <div class="absolute-bottom text-subtitle1 text-center">John</div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="undraw_Ready_for_waves_vlke.png">
          <div class="absolute-top text-center">Marco</div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="undraw_delivery_truck_vt6p.png">
          <div class="absolute-bottom">Robert</div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="undraw_Updated_resume_re_7r9j.png">
          <div class="absolute-full text-subtitle2 flex flex-center">Mialy</div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      expanded: ref(false),
      lorem: ' ',
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
