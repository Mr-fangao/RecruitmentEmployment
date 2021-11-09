 <template>
<div>
 <div class="tab-content">
 <div class="tab-content1" @click="cur=1" :class="{active:cur==1}">数据标注</div>
 <div class="tab-content2" @click="cur=2" :class="{active:cur==2}">案件数</div>
  <div class="tab-content3" @click="cur=3" :class="{active:cur==3}">数据标注</div>
  <div class="tab-mid">网络招聘大数据分析与可视化系统</div>
 <div class="tab-content4" @click="cur=4" :class="{active:cur==4}">案件数</div>
  <div class="tab-content5" @click="cur=5" :class="{active:cur==5}">数据标注</div>
 <div class="tab-content6" @click="cur=6" :class="{active:cur==6}">案件数</div>
 </div>
 <div class="tab">
 <div v-show="cur==1">
 <div>内容1</div>
 </div>
 <div v-show="cur==2">
 <div>内容2</div>
 </div>
 </div>
</div>
</template>

<script>

export default {
 data () {
 return{
  cur:1
 }
 },

methods:{
 }
}
</script>

<style lang="less" scoped>
.tab-content{
  background: url(../assets/img/headerbg.png);
  background-size: 100% 100%;
   text-align: center;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: rgb(19, 173, 211);
  line-height: 50px;
  .tab-mid{
    flex: 6;
    font-size: 18pt;
    color: rgb(245, 245, 245);
  }
}
.tab-content .active{
//  background-color: #194e84 !important;
background: url(../assets/img/menucurrent.png);
 color: #fff;
}
.tab-content1{
  margin-left: 6%;
  flex: 1;
 width: 60px;
 height: 30px;
}
.tab-content2{
  flex: 1;
 width: 60px;
 height: 30px;
}
.tab-content3{
    flex: 1;
 width: 60px;
 height: 30px;
}
.tab-content4{
    flex: 1;
 width: 60px;
 height: 30px;
}
.tab-content5{
    flex: 1;
 width: 60px;
 height: 30px;
}
.tab-content6{
    margin-right: 6%;
    flex: 1;
 width: 60px;
 height: 30px;
}
</style>