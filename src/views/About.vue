<template>
  <div class="about">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <p>
            <span v-html="$t('intro')"></span>
          </p>
          <p v-html="$t('nip')"></p>
        </b-col>
        <b-col>
          <a
            class="LI-simple-link"
            href="https://pl.linkedin.com/in/tomasz-kusmierczyk-letsweb-biz?trk=profile-badge"
            target="blank"
          >
            <img v-bind:src="badgeImage" v-bind:alt="$t('badgeImageLabel')" />
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
export default {
  name: "About",
  data() {
    return {
      thisTitle: this.$i18n.locale
    };
  },
  computed: {
    badgeImage() {
      return this.userLanguage === "pl"
        ? "/img/linkedin-badge_pl-min.PNG"
        : "/img/linkedin-badge_en-min.PNG";
    }
  },
  created() {
    this.$emit(`update:layout`, {
      layout: LayoutDefault,
      title: this.$t("title")
    });
  }
};
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
<i18n>
{
  "en": {
    "title": "About",
    "badgeImageLabel": "LinkedIn badge image.",
    "intro": "<b>letsweb.biz - Tomasz Kuśmierczyk</b> self-employment and freelanced consulting",
    "nip": "<b>Tax Identification Number</b> PL8641620172"
  },
  "pl": {
    "title": "Info",
    "badgeImageLabel": "Obraz wizytówki LinkedIn.",
    "intro": "<b>letsweb.biz - Tomasz Kuśmierczyk</b> indywidualna działalność gospodarcza. ",
    "nip": "<b>NIP</b> 8641620172"
  }
}
</i18n>