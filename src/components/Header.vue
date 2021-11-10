 <template>
  <div>
    <div class="tab-content">
      <div
        class="tab-content1"
        @click="(cur = 1), gotojobsearch()"
        :class="{ active: cur == 1 }"
      >
        数据标注
      </div>
      <div
        class="tab-content2"
        @click="(cur = 2), gotodata()"
        :class="{ active: cur == 2 }"
      >
        案件数
      </div>
      <div class="tab-content3" @click="cur = 3" :class="{ active: cur == 3 }">
        数据标注
      </div>
      <div class="tab-mid">网络招聘大数据分析与可视化系统</div>
      <div class="tab-content4" @click="cur = 4" :class="{ active: cur == 4 }">
        案件数
      </div>
      <div class="tab-content5" @click="cur = 5" :class="{ active: cur == 5 }">
        数据标注
      </div>
      <div class="tab-content6" @click="cur = 6" :class="{ active: cur == 6 }">
        案件数
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur: 1,
    };
  },
  methods: {
    gotojobsearch() {
      this.$router.replace("/jobsearch");
    },
    gotodata() {
      this.$router.replace("/data");
    },
  },
};
</script>

<style lang="less" scoped>
.tab-content {
  background: url(../assets/img/headerbg.png);
  background-size: 100% 120%;
  text-align: center;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: rgb(19, 173, 211);
  line-height: 50px;
  font-weight: bold;
  .tab-mid {
    cursor: pointer;
    flex: 6;
    line-height: 50px;
    font-size: 18pt;
    font-weight: normal;
    color: rgb(245, 245, 245);
  }
  .tab-content1 {
    cursor: pointer;
    margin-left: 4%;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content2 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content3 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content4 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content5 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content6 {
    cursor: pointer;
    margin-right: 4%;
    flex: 1;
    width: 50px;
    height: 40px;
  }
}
.tab-content .active {
  cursor: pointer;
  background: url(../assets/img/menucurrent.png);
  background-position: 49% -81%;
  color: #fff;
}
</style>