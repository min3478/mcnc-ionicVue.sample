<template>
  <ion-page>
    <div>
      <h1>상세</h1>
      <h4>{{ state.title }}</h4>
      <a class="name">작성자 : {{ state.name }} ({{ state.id }})</a>
      <hr color="gray">
      <span>{{ state.content }}</span>
      <br><br>
      <button @click="closePage">닫기</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="passData">전달</button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import store from "@/store";
import { IonPage, onIonViewWillEnter } from "@ionic/vue";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Detail {
  title: string,    // 게시물 제목
  content: string,  // 게시물 내용
  id: string,       // 작성자 ID
  name?: string,    // 작성자명
}

// 화면간의 이동 제어
const router = useRouter();
// 전달된 값을 꺼낼 때 사용
const state: Detail = reactive({
  title: '',    // 게시물 제목
  content: '',  // 게시물 내용
  id: '',       // 작성자 ID
});
const route = useRoute();


// detail.json 값 가져오기
async function getData() {
  return (await fetch('mock/detail.json')).json();
}

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
    alert('작성자만 전달 가능합니다');
  }
}

// 화면 진입 애니메이션 표시 전
onIonViewWillEnter(async () => {
  const res = await getData();
  state.title = res.body.title;
  state.content = res.body.content;
  state.id = res.body.id;

  state.title = String(route.query.title);
  state.content = String(route.query.content);
  state.id = String(route.query.id);
  state.name = String(route.query.name);
});
</script>