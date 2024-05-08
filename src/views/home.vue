<template>
  <div>
    <div class="bg-[#f4f4f4] pb-[24vw]">
      <div class="h-[100vh] overflow-auto">
        <div
          class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2"
        >
          <div
            class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center"
          >
            <Icon icon="mingcute:menu-line" width="8vw" height="8vw" />
            <div class="relative">
              <Icon
                icon="ic:round-search"
                width="4.47vw"
                height="4.47vw"
                class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"
              />
              <input
                type="text"
                placeholder="Love Is Gone (Acoustic)"
                class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
              />
              <Icon
                icon="tabler:line-scan"
                width="4.47vw"
                height="4.47vw"
                class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"
              />
            </div>
            <Icon icon="iconoir:microphone-speaking" width="8vw" height="8vw" />
          </div>
          <div
            class="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto"
          >
            <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item
                v-for="item in homepageData?.[0]?.extInfo?.banners"
                :key="item.bannerId"
              >
                <van-image
                  width="100vw"
                  height="135px"
                  fit="cover"
                  :src="item.pic"
                />
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="dark:bg-[#1a1c23] bg-[#f1f1f1]">
          <div
            class="w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[20vw]"
            ref="wrapper"
          >
            <div
              class="flex w-[190vw] mx-auto overflow-hidden h-[20vw] scroll-content relative"
            >
              <div
                v-for="item in homepageDragonball"
                :key="item.id"
                class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
              >
                <img
                  :src="item.iconUrl"
                  alt=""
                  :style="{
                    filter:
                      'contrast(0%) sepia(100%) hue-rotate(-50deg) saturate(750%)',
                  }"
                />
                <p
                  class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
                >
                  {{ item.name }}
                </p>
              </div>
              <span
                class="dark:text-[#1a1c23] absolute text-center top-[-1vw] w-[15vw] h-[19vw] leading-[19vw] items-center text-[3.5vw] text-[#fff] font-[800]"
                >{{ currentDate }}</span
              >
            </div>
          </div>
          <div class="w-[100vw] px-[4vw] dark:text-[#e9ebf2]">
            <div class="flex justify-between items-center h-[12vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]"
                  >推荐歌单</span
                >
                <Icon
                  icon="mingcute:right-line"
                  class="dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw]"
                />
              </div>
              <Icon
                icon="nimbus:ellipsis"
                class="dark:text-[#e9ebf2] text-[#3d475b] w-[4vw] h-[6vw]"
                @click="drawer = true"
              />
              <el-drawer
                title="推荐歌单"
                v-model="drawer"
                direction="btt"
                class="rounded-t-[15px] dark:bg-[#272727] bg-[#fff]"
              >
                <div class="h-[12vw] flex items-center">
                  <Icon
                    icon="streamline:like-1"
                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"
                  />
                  <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                    优先推荐
                  </p>
                </div>
                <div class="h-[12vw] flex items-center">
                  <Icon
                    icon="ri:dislike-line"
                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"
                  />
                  <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                    减少推荐
                  </p>
                </div>
                <div class="h-[12vw] flex items-center">
                  <Icon
                    icon="ion:ellipsis-vertical-circle-outline"
                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"
                  />
                  <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                    更多内容
                  </p>
                </div>
              </el-drawer>
            </div>
          </div>
          <div
            class="w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"
            ref="wrapperTwo"
          >
            <div class="w-[210vw] flex pl-[2vw]">
              <div class="pt-[1vw] relative">
                <div class="w-[31vw] relative z-[1] h-[40vw] overflow-hidden">
                  <van-swipe :autoplay="3000" vertical="true">
                    <van-swipe-item
                      v-for="item in FirstThreeItems"
                      :key="item.id"
                    >
                      <van-image
                        fit="cover"
                        :src="item.picUrl"
                        class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
                      />
                      <p
                        class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item relative z-[1]"
                      >
                        {{ item.name }}
                      </p>
                    </van-swipe-item>
                  </van-swipe>
                </div>
                <div
                  class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
                ></div>
              </div>
              <div
                class="w-[31vw] ml-[3vw]"
                v-for="item in lastFiveItems"
                :key="item.id"
              >
                <div
                  class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
                >
                  <img
                    :src="item.picUrl"
                    alt=""
                    class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
                  />
                  <Icon
                    icon="ph:play-fill"
                    class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2]"
                  />
                  <div
                    class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]"
                  >
                    <Icon
                      icon="ph:play-fill"
                      class="text-[#fff] w-[3vw] h-[3vw]"
                    />
                    <span class="font-[800] text-[2.5vw]">{{
                      item.playCount
                    }}</span>
                  </div>
                  <div
                    class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
                  ></div>
                </div>
                <p
                  class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-[100vw] px-[4vw] dark:text-[#e9ebf2]">
            <div class="flex justify-between items-center h-[12vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]"
                  >新歌新碟\数字专辑</span
                >
                <Icon
                  icon="mingcute:right-line"
                  class="dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw]"
                />
              </div>
              <Icon
                icon="nimbus:ellipsis"
                class="dark:text-[#e9ebf2] text-[#3d475b] w-[4vw] h-[6vw]"
                @click="drawer1 = true"
              />
              <el-drawer
                title="新歌新碟\数字专辑"
                v-model="drawer1"
                direction="btt"
                class="rounded-t-[15px] dark:bg-[#272727] bg-[#fff]"
              >
                <div class="h-[12vw] flex items-center">
                  <Icon
                    icon="streamline:like-1"
                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"
                  />
                  <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                    优先推荐
                  </p>
                </div>
                <div class="h-[12vw] flex items-center">
                  <Icon
                    icon="ri:dislike-line"
                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"
                  />
                  <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                    减少推荐
                  </p>
                </div>
                <div class="h-[12vw] flex items-center">
                  <Icon
                    icon="ion:ellipsis-vertical-circle-outline"
                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw]"
                  />
                  <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
                    更多内容
                  </p>
                </div>
              </el-drawer>
            </div>
          </div>
          <div
            class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"
            ref="wrapperThree"
          >
            <div class="scroll-content flex">
              <ul
                class="w-[88vw] scroll-item pb-[3.8vw]"
                v-for="(group, index) in albumGroups"
                :key="index"
              >
                <li
                  class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
                  v-for="item in group"
                  :key="item.albumId"
                >
                  <div class="flex">
                    <img
                      :src="item.coverUrl"
                      alt=""
                      class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                    />
                    <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                      <h4
                        class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                      >
                        {{ item.albumName }}
                      </h4>
                      <p
                        class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                      >
                        {{ item.artistName }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#fff] fixed z-[3] b-[0] l-[0]"></div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import {
  getHomePageData,
  getDragonball,
  getPersonalized,
  getAlbumList,
} from "../service";
import BetterScroll from "../components/BetterScroll.vue";
import BScroll from "@better-scroll/core";
export default {
  // 组件注册
  components: { BetterScroll },
  setup() {
    const homepageData = ref({});
    const homepageDragonball = ref([]);
    const homePersonalized = ref({});
    const FirstThreeItems = ref({});
    const lastFiveItems = ref({});
    const homeAlbumList = ref({});
    let albumGroups = ref({});
    let groups = [];
    let drawer = ref(false);
    let drawer1 = ref(false);
    const currentDate = ref(new Date().getDate()); // 获取当前日期的“日”部分
    (async () => {
      // 如何集中捕获请求错误？
      try {
        homepageData.value = (await getHomePageData()).data.data.blocks;
        homepageDragonball.value = (await getDragonball()).data.data;
        homePersonalized.value = (await getPersonalized()).data.result;
        FirstThreeItems.value = homePersonalized.value.slice(0, 3);
        lastFiveItems.value = homePersonalized.value.slice(3, 8);
        homeAlbumList.value = (await getAlbumList()).data.products;
        // 切分数据的函数，按每份三个专辑切分
        const splitIntoGroups = (data, size) => {
          for (let i = 0; i < data.length; i += size) {
            groups.push(data.slice(i, i + size)); // 切片，每次移动步长为 size
          }
          return groups;
        };

        albumGroups.value = splitIntoGroups(homeAlbumList.value, 3);
      } catch (error) {
        console.log(error);
      }
    })();
    const wrapper = ref(null);
    const wrapperTwo = ref(null);
    const wrapperThree = ref(null);
    onMounted(() => {
      const scroll = new BScroll(wrapper.value, {
        scrollX: true,
        scrollY: false,
        click: true,
      });
      const scroll1 = new BScroll(wrapperTwo.value, {
        scrollX: true,
        scrollY: false,
        click: true,
      });
      const scroll2 = new BScroll(wrapperThree.value, {
        scrollX: true,
        scrollY: false,
        click: true,
      });
    });
    return {
      homepageData,
      homepageDragonball,
      wrapper,
      wrapperTwo,
      drawer,
      drawer1,
      currentDate,
      homePersonalized,
      FirstThreeItems,
      lastFiveItems,
      homeAlbumList,
      albumGroups,
      wrapperThree,
    };
  },
};
</script>
<style>
.el-drawer__header {
  border: 1px solid #e8e8e8;
  padding-top: 0;
  height: 10vw;
  margin-bottom: 0;
}
.el-drawer__body {
  padding-top: 0;
  padding-bottom: 0;
}
.el-drawer__title {
  font-size: 3vw;
}
.el-drawer {
  height: auto !important;
}
.van-image__img {
  width: 31vw;
  height: 31vw;
  border-radius: 8px;
}
</style>
