<template>
  <div id="signin">
    <p>{{this.$t('signin.availability')}}</p>
    <p
      v-if="loginFailed"
      class="mx-auto p-1 d-inline text-white bg-danger"
    >{{this.$t("loginFailed")}}</p>
    <div class="signin-form">
      <b-form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">{{$t('signin.email')}}</label>
          <b-form-input type="email" id="email" @blur="$v.email.$touch()" v-model="email" />
          <p class="text-danger" v-if="!$v.email.email && $v.email.$error">{{$t('validation.email.email')}}</p>
          <p
            class="text-danger"
            v-if="!$v.email.required && $v.email.$error"
            v-t="'validation.email.required'"
          ></p>
          <i18n
            v-if="!$v.email.maxLength"
            path="validation.email.maxLength"
            tag="p"
            class="text-danger"
          >
            <template #maxlength>
              <span>{{ $v.email.$params.maxLength.max }}</span>
            </template>
          </i18n>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password" v-t="'signin.password'"></label>
          <input type="password" id="password" v-model="password" @blur="$v.password.$touch()" />
          <p
            class="text-danger"
            v-if="!$v.password.required && $v.password.$error"
            v-t="'validation.password.required'"
          ></p>
          <i18n
            v-if="!$v.password.minLength"
            path="validation.password.minLength"
            tag="p"
            class="text-danger"
          >
            <template #length>
              <span>{{ $v.password.$params.minLength.min }}</span>
            </template>
          </i18n>

          <i18n
            v-if="!$v.password.maxLength"
            path="validation.password.maxLength"
            tag="p"
            class="text-danger"
          >
            <template #maxlength>
              <span>{{ $v.password.$params.maxLength.max }}</span>
            </template>
          </i18n>
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">{{this.$t('signin.submitBtn')}}</button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "signin",

  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    loginFailed() {
      const result = this.$store.getters.loginFailed;
      if (result) {
        this.makeToast(
          "danger",
          this.$t("loginFailedCaption"),
          this.$t("loginFailed")
        );
        this.$store.commit("unmarkLoginFailure");
      }
      return result;
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("signIn", {
        email: formData.email,
        password: formData.password
      });
      this.email = "";
      this.password = "";
      this.$v.password.$reset();
      this.$v.email.$reset();
    },
    makeToast(variant = null, caption, message) {
      this.$bvToast.toast(message, {
        title: caption,
        variant: variant,
        solid: true
      });
    }
  },
  created() {
    this.$emit(`update:layout`, {
      layout: LayoutDefault,
      title: this.$t("signin.title")
    });
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(50)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15)
    }
  }
};
</script>
<i18n>
{
  "en": {
    "loginFailedCaption": "Login failed",
    "loginFailed": "Login failed, please correct data entered.",
    "validation": {
      "email":{
        "email": "Please provide a valid email address.",
        "required": "* @:signin.email field is required",
        "maxLength": "Field '@:signin.email' must have at most {maxlength} characters."
      },
      "password": {
        "required": "* @:signin.password is required.",
        "minLength": "Field '@:signin.password' must have at least {length} characters.",
        "maxLength": "Field '@:signin.password' may have at most {maxlength} characters."
      }
    }
  },
  "pl": {
    
    "loginFailedCaption": "Nieudane logowanie",
    "loginFailed": "Nieudane logowanie. Proszę poprawić wprowadzone dane.",
    "validation": {
      "email":{
        "email": "Proszę wprowadzić poprawny email.",
        "required": "Pole '@:signin.email' musi być wypełnione.",
        "maxLength": "Pole '@:signin.email' może mieć nie więcej niż {maxlength} liter."
      },
      "password": {
        "required": "Pole '@:signin.password' musi być wypełnione.",
        "minLength": "Pole '@:signin.password' musi mieć przynajmniej {length} liter.",
        "maxLength": "Pole '@:signin.password' może mieć nie więcej niż {maxlength} liter."
      }
    }
  }
}
</i18n>
<style scoped>
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
.input.invalid input {
  border: 1px solid red;
  /* background-color: lightcoral; */
}
.input.invalid label {
  color: red;
}
</style>