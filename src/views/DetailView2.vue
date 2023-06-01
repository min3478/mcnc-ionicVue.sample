<template>
  <ion-page>
    <div>
      <h1>상세</h1>
      <h4>{{ $route.query.title }}</h4>
      <h6 class="name">작성자 : {{ $route.query.name }} ({{ $route.query.id }})</h6>
      <hr color="gray">
      <h5>{{ $route.query.content }}</h5>
      <br>
      <button @click="closePage">닫기</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="passData">전달</button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import store from "@/store";
import { IonPage } from "@ionic/vue";
import { useRoute, useRouter } from "vue-router";

// 화면간의 이동 제어
const router = useRouter();
// 전달 된 값을 꺼낼 때 사용
const route = useRoute();

// 닫기
function closePage() {
  router.go(-1);
}

// 전달
function passData() {
  // 작성자의 경우
  if (store.getters.getUserId === route.query.id) {
    alert('전달 요청 완료');
    store.dispatch('setPassFlag');
  }
  // 작성자가 아닌 경우
  else if (store.getters.getUserId !== route.query.id) {
    alert('작성자만 전달 가능합니다')
  }
}
</script>
