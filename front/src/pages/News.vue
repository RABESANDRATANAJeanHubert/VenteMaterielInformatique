<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page padding>
    <div class="col-12 q-mb-md">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
        :autoplay="autoplay"
        control-color="black"
      >
        <q-carousel-slide :name="1" img-src="news1.PNG" />
        <q-carousel-slide :name="2" img-src="news2.PNG" />
        <q-carousel-slide :name="3" img-src="news3.PNG" />
        <q-carousel-slide :name="4" img-src="news4.PNG" />
      </q-carousel>
    </div>
    <div class="row">
      <div class="col-12 text-center text-h5 q-mb-md">
        Decouvrer la liste de nos article
      </div>

      <div class="col-4">
        <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="info" />
            <q-btn flat color="primary" no-caps> Voir plus </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="info" />
            <q-btn flat color="primary" no-caps> Voir plus </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="info" />
            <q-btn flat color="primary" no-caps> Voir plus </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'PageName'
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
