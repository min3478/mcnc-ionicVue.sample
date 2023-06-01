<template>
  <ion-page>
    <div>
      <h1>로그인</h1>
      <div>
        <input type="text" maxlength="4" class="input-id" placeholder="ID" v-model="id" />
        <br /><br />
        <button @click="goLogin">접속</button>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import store from "@/store";
import { IonPage } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const id = ref();
id.value = "2103";
const router = useRouter();

// 유효성 체크
function goLogin() {
  if (id.value === "2103" || id.value === "0321") {       // 옳바른 ID를 입력했을 경우
    store.dispatch('setUserId', id.value);
    store.dispatch('setLogin');
    goListView();
  } else if (id.value === undefined || id.value === '') { // ID 입력을 안했을 경우
    alert('ID를 입력해주세요.');
  } else if ((/[^0-9]/).test(id.value)) {                 // ID가 숫자가 아닐 경우
    alert('올바르지 않은 ID입니다.');
  } else {                                                // ID가 틀린 경우
    alert('접속할 수 없는 ID입니다.');
  }
}

// ListView 화면으로 이동
function goListView() {
  router.push('/list');
}
</script>
