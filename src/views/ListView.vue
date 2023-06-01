<template>
  <ion-page>
    <div>
      <h1>목록</h1>
      <button @click="test">
        PUSH
      </button>
      <div>
        <ul>
          <li v-for="item in state.list" :key="item.seq" :seq="item.seq" @click="goDetail">
            {{ item.title }} / {{ item.name }}({{ item.id }}) /
            {{ item.date.substring(2, 4) }}-{{ item.date.substring(4, 6) }}-{{ item.date.substring(6, 8) }}
            <a v-if="item.id === store.getters.getUserId">(작성자)</a>
          </li>
        </ul>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import store from "@/store";
import { IonPage, onIonViewWillEnter, onIonViewDidEnter } from "@ionic/vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

interface List {
  seq: string,    // 게시물 seq
  title: string,  // 게시물 제목
  name: string,   // 작성자 이름
  id: string,     // 작성자 id
  date: string,   // 작성일자
}

interface State {
  list: List[],
}

const router = useRouter();
const state: State = reactive({
  list: []
});

// 통신을 통해 Data를 가져옴
async function getData() {
  return (await fetch("mock/list.json")).json();
}

// DetailView 화면으로 이동
function goDetail() {
  router.push({ name: 'Detail' });
}

function test() {
  const item: List = { seq: '4', title: '보고서 4', name: 'md', id: '3320', date: '20230421' };

  state.list.push(item);
}

// 화면 진입 애니메이션 표시 전
onIonViewWillEnter(async () => {
  const res = await getData();
  state.list = res.body.list;
});

// 화면 진입 애니메이션 표시 후
onIonViewDidEnter(async () => {
  if (store.getters.getPassFlag === true) {
    alert('전달 요청 진행 중');
    store.dispatch('setPassFlag');
  }
});

</script>
