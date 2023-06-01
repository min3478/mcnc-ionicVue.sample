<template>
  <ion-page>
    <div>
      <h1>상세</h1>
      <h3>{{ state.title }}</h3>
      <h5>{{ state.content }}</h5>
      <br>
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
import { useRouter } from "vue-router";

interface Detail {
  title: string,    // 제목
  content: string,  // 내용
  id: string,       // 게시물 Seq
}

const router = useRouter();
// 상세 데이터
const state: Detail = reactive({
  title: '',
  content: '',
  id: '',
});

// 상세 데이터 반환
async function getDetail() {
  return (await fetch("mock/detail.json")).json()
}

// 닫기
function closePage() {
  router.go(-1);
}

// 전달
function passData() {
  // 작성자의 경우
  if (store.getters.getUserId === state.id) {
    alert('전달 요청 완료');
    store.dispatch('setPassFlag');
  }
  // 작성자가 아닌 경우
  else if (store.getters.getUserId !== state.id) {
    alert('작성자만 전달 가능합니다')
  }
}


// 화면 진입 애니메이션 표시 전
onIonViewWillEnter(async () => {
  const res = await getDetail();
  state.title = res.body.title;
  state.content = res.body.content;
  state.id = res.body.id;
});
</script>
