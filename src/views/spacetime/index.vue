<template>
  <div class="map">
    <div class="Thematicmap">
      <!-- 专题地图查询 -->
      <div class="maintools">
        <!-- 按钮 -->
        <div class="option">
          <ul>
            <li class="activation">制图条件设置</li>
          </ul>
          <span @click="dian()"><icon-svg :icon-class="pan === 0 ? 'icon-toggle-left' : 'icon-toggle-right'" class="zhuang" /></span>
        </div>
        <!-- 内容 -->
        <div class="content son">
          <!-- 查询功能 -->
          <div class="find">
            <!-- 头部 -->
            <div class="top"><span>{{ name }}</span></div>
            <!-- 身体 -->
            <div>
              <!-- 时间选择器 -->
              <div v-show="timedisplay" class="time">
                <el-row>
                  <el-col :span="12">
                    <el-date-picker v-model="json.STime" type="year" placeholder="选择开始日期" :picker-options="STime" />
                  </el-col>
                  <el-col :span="12">
                    <el-date-picker v-model="json.ETime" type="year" placeholder="选择结束日期" :picker-options="ETime" />
                  </el-col>
                </el-row>
              </div>
            </div>
            <div>
              <!--空间尺度-->
              <div v-show="spacedisplay" class="space">
                <el-row>
                  <el-col :span="8">
                    <p>空间尺度</p>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="json.space" placeholder="请选择空间尺度"><el-option v-for="item in space" :key="item.value" :label="item.label" :value="item.value" /></el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div>
              <div v-show="Typedisplay" class="Type" style=" margin: 10px 3px;">
                <el-row>
                  <el-col :span="8">
                    <p>椭圆大小</p>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="json.Type" placeholder="请选择数据类型"><el-option v-for="item in Type" :key="item.value" :label="item.label" :value="item.value" /></el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <!-- 尾部 -->
            <div class="bottom">
              <el-button-group>
                <el-button type="primary" icon="el-icon-search" size="small" @click="btnSelect">搜索</el-button>
                <!-- <el-button type="primary" icon="el-icon-s-order" size="small">统计</el-button> -->
                <el-button type="primary" icon="el-icon-refresh-left" size="small" @click="chongzhi">重置</el-button>
              </el-button-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 盒子 -->
    <div v-if="ceng == 0">
      <lengRe :ceng="ceng" :pjson="subjson" />
    </div>
    <div v-if="ceng == 1">
      <gwr :ceng="ceng" :pjson="subjson" />
    </div>
    <div v-if="ceng == 2">
      <jvBu :ceng="ceng" :pjson="subjson" />
    </div>
    <div v-if="ceng == 3">
      <xinXing :ceng="ceng" :pjson="subjson" />
    </div>
    <div v-if="ceng == 4">
      <tuoYuan :ceng="ceng" :pjson="subjson" />
    </div>
    <!-- 按钮 -->
    <div class="special">
      <ul>
        <li @click="tian()">
          <p>冷热点分析</p>
          <icon-svg icon-class="icon-redian" class="img" />
        </li>
        <li @click="re()">
          <p>GWR</p>
          <icon-svg icon-class="icon-jiaquanku" class="img" />
        </li>
        <li @click="ying()">
          <p>局部莫兰</p>
          <icon-svg icon-class="icon-jianceyichangzhimidu" class="img" />
        </li>
        <li @click="jv()">
          <p>新兴时空热点</p>
          <icon-svg icon-class="icon-zhanlvexinxingchanye" class="img" />
        </li>
        <li @click="feng()">
          <p>标准差椭圆</p>
          <icon-svg icon-class="icon-tuoyuan" class="img" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import LengRe from './components/lengRe' // 数据插入
import Gwr from './components/gwr'
import JvBu from './components/jvBu'
import XinXing from './components/xinXing'
import TuoYuan from './components/tuoYuan'

export default {
  name: 'Spacetime',
  components: {
    LengRe,
    Gwr,
    JvBu,
    XinXing,
    TuoYuan
  },
  data() {
    return {
      ceng: 0,
      json: {
        STime: new Date('2018'),
        ETime: new Date('2019'),
        space: '',
        Type: '',
        c: 0
      },
      STime: {
        disabledDate: (time) => {
          if (this.json.ETime !== '') {
            return time.getTime() < new Date('2011-12-31') || time.getTime() > this.json.ETime
          } else {
            return time.getTime() < new Date('2011-12-31')
          }
        }
      },
      ETime: {
        disabledDate: (time) => {
          return time.getTime() < this.json.STime || time.getTime() < new Date('2011-12-31') || time.getTime() > new Date('2018-12-31')
        }
      },
      name: '冷热点分析',
      space: [
        {
          value: '市级',
          label: '省级'
        },
        {
          value: '县级',
          label: '市级'
        },
        {
          value: '街道',
          label: '县级'
        }
      ],
      Type: [
        {
          value: '1_STANDARD_DEVIATION',
          label: '小号'
        },
        {
          value: '2_STANDARD_DEVIATIONS',
          label: '中号'
        },
        {
          value: '3_STANDARD_DEVIATIONS',
          label: '大号'
        }
      ],
      checked: true,
      pan: 1,
      // 移动
      canMove: false,
      timedisplay: true,
      spacedisplay: true,
      Typedisplay: false,
      subjson: ''
    }
  },
  created() {
    setTimeout(function() {
      document.getElementsByClassName('map')[0].style.display = 'block'
    }, 200)
  },
  destroyed() {
    document.getElementsByClassName('map')[0].style.display = 'none'
  },
  mounted() {
    var that = this
    var li = document.querySelectorAll('.option li')
    var content = document.querySelectorAll('.content')
    for (var i = 0; i < li.length; i++) {
      // 设置索引
      li[i].setAttribute('index', i)
      li[i].addEventListener('click', function() {
        for (var j = 0; j < li.length; j++) {
          li[j].classList.remove('activation')
        }
        this.className = this.className + ' ' + 'activation'
        // 拿到索引
        var index = this.getAttribute('index')
        for (var k = 0; k < content.length; k++) {
          content[k].classList.remove('son')
        }
        content[index].className = content[index].className + ' ' + 'son'
        document.getElementsByClassName('maintools')[0].style.right = '0'
        that.pan = 1
      })
    }
  },
  methods: {
    btnSelect() {
      var that = this
      const STime = new Date(that.json.STime)
      const ETime = new Date(that.json.ETime)
      that.json.STime = STime.getFullYear() + '-' + this.checkTime(STime.getMonth() + 1) + '-' + this.checkTime(STime.getDate())
      that.json.ETime = ETime.getFullYear() + '-' + this.checkTime(ETime.getMonth() + 1) + '-' + this.checkTime(ETime.getDate())
      that.json.c++
      this.subjson = this.json
    },
    checkTime(i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
    chongzhi() {
      this.json = { STime: new Date('2018-01-01'), ETime: new Date('2018-01-01'), space: '', Type: '', c: 0 }
    },
    dian() {
      if (this.pan === 0) {
        document.getElementsByClassName('maintools')[0].style.right = '0'
        this.pan = 1
      } else {
        document.getElementsByClassName('maintools')[0].style.right = '-300px'
        this.pan = 0
      }
    },
    tian() {
      this.ceng = 0
      if (this.ceng === 0) {
        this.timedisplay = true
        this.spacedisplay = true
        this.Typedisplay = false
        this.name = '冷热点分析分析'
      }
    },
    re() {
      this.ceng = 1
      if (this.ceng === 1) {
        this.timedisplay = true
        this.spacedisplay = true
        this.Typedisplay = false
        this.name = '地理加权回归分析'
      }
    },
    ying() {
      this.ceng = 2
      if (this.ceng === 2) {
        this.timedisplay = true
        this.spacedisplay = true
        this.Typedisplay = false
        this.name = '局部莫兰指数分析'
      }
    },
    jv() {
      this.ceng = 3
      if (this.ceng === 3) {
        this.timedisplay = true
        this.spacedisplay = false
        this.Typedisplay = false
        this.name = '新兴时空热点分析'
      }
    },
    feng() {
      this.ceng = 4
      if (this.ceng === 4) {
        this.timedisplay = true
        this.spacedisplay = false
        this.Typedisplay = true
        this.name = '标准差椭圆分析'
      }
    },
    san() {
      this.ceng = 5
      if (this.ceng === 5) {
        this.timedisplay = true
        this.spacedisplay = true
        this.Typedisplay = false
      }
    },
    mi() {
      this.ceng = 6
      if (this.ceng === 6) {
        this.timedisplay = true
        this.spacedisplay = true
        this.Typedisplay = false
      }
    },
    shi() {
      this.ceng = 7
      if (this.ceng === 7) {
        this.timedisplay = false
        this.spacedisplay = false
        this.Typedisplay = false
      }
    }
  }
}
</script>
<style scoped>
.map {
  display: none;
  animation: fade-in;
  animation-duration: 1s;
  -webkit-animation: fade-in 1s;
}
.special {
  position: absolute;
  /* 为了不遮住 表格 */
  z-index: 99;
  bottom: 12%;
  left: 50%;
  /* transform: translate(-50%, 0); */
  background-color: rgba(40, 43, 57, 0.8);
  border: 1px solid rgb(74, 78, 85);
  border-radius: 15px;
  width: 660px;
  height: 40px;
  line-height: 40px;
  animation: fade-in;
  animation-duration: 1.2s;
  -webkit-animation: fade-in 1.2s;
  text-align: center;
  transform: translate(-50%, 0) skew(-20deg);
}
.special ul {
  margin: 0;
  padding: 0;
  height: 45px;
  list-style-type: none;
  position: absolute;
  /* left: 50%; */
  width: 100%;
  /* transform: translate(-50%, 0); */
  transform: skew(20deg);
  top: -20px;
}
.special li {
  display: inline-block;
  margin: 0 20px;
  margin-top: 3px;
  cursor: pointer;
  position: relative;
}
.special li .img {
  width: 30px;
  height: 30px;
  -webkit-box-reflect: below 7px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.3, transparent), to(rgba(255, 255, 255, .5)));
  transition: all 0.3s;
  transform-origin: 40% 70%;
}
.special li p {
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  bottom: 90px;
  left: 0;
  width: 100%;
  background-color: #222;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
}
.special li:hover p {
  display: block;
  color: #fff;
  animation: fade-in;
  animation-duration: 0.5s;
  -webkit-animation: fade-in 0.5s;
}
.special li:hover .img {
  transform: scale(2);
  margin: 0 30px;
}
.special li:hover + li .img,
.special li.prev .img {
  transform: scale(1.5);
  margin: 0 10px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  /*初始状态 透明度为0*/
  40% {
    opacity: 0;
  }
  /*过渡状态 透明度为0*/
  100% {
    opacity: 1;
  }
  /*结束状态 透明度为1*/
}
</style>
<style scoped>
@font-face {
  src: url("./public/font/KuHei.ttf");
  font-family: "KuHei";
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  /*初始状态 透明度为0*/
  40% {
    opacity: 0;
  }

  /*过渡状态 透明度为0*/
  100% {
    opacity: 1;
  }

  /*结束状态 透明度为1*/
}
.Thematicmap .find p {
  display: block;
  color: #fff;
  margin: 10px;
  padding: 0;
}
.Thematicmap .find {
  position: absolute;
  text-align: center;
  width: 300px;
  /* border-radius: 5px; */
  height: 430px;
  /* border: 1px solid rgb(39,45,57);
  background-color: rgba(40, 43, 57, 0.8); */
  z-index: 100;
  user-select: none;
  /* top: 10px;
  right: 10px;
  left: 10px; */
}
.Thematicmap .find .top {
  /* background-color: rgb(40, 43, 57); */
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #fff;
  /* border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px; */
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: move;
  user-select: none;
}
/* 时间范围 */
.Thematicmap .find .time .el-date-editor.el-input {
  width: 140px !important;
  margin: 10px 0px;
}
/* 空间尺度 */
.space {
  margin: 10px 3px;
  border-top: 1px solid #fff;
  padding: 10px;
}
.Type {
  margin: 10px 3px;
  border-top: 1px solid #fff;
  padding: 10px;
}
/* 底部 */
.Thematicmap .find .bottom {
  margin-top: 10px;
  border-top: 1px solid #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  /* background-color: rgb(40, 43, 57); */
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 38px;
  line-height: 38px;
  user-select: none;
}

/* 主要工具 */
.Thematicmap .maintools {
  position: absolute;
  text-align: center;
  width: 300px;
  height: 100%;
  right: 0px;
  top: 0;
  border-bottom-left-radius: 5px;
  background-color: rgba(40, 43, 57, 0.8);
  border-left: 1px solid rgb(102, 103, 105);
  /* 不阻挡表格 */
  z-index: 99;
  transition: all 1.5s;
}
/* 选项 */
.Thematicmap .maintools .option {
  position: absolute;
  left: -31px;
  top: 0;
}
.Thematicmap .maintools .option .zhuang {
  border: 1px solid rgb(173, 175, 179);
  background-color: rgba(40, 43, 57, 0.8);
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;
  cursor: pointer;
  width: 30px;
  height: 35px;
}
.Thematicmap .maintools .option ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.Thematicmap .maintools .option ul li {
  padding: 10px 0;
  width: 30px;
  margin: 0 auto;
  margin-bottom: 5px;
  border: 1px solid rgb(173, 175, 179);
  background-color: rgba(40, 43, 57, 0.8);
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;
  font-family: KuHei;
  cursor: pointer;
}
.Thematicmap .maintools .option .activation {
  position: relative;
}
.Thematicmap .maintools .option .activation::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  right: -1px;
  top: 0;
  background: #F19900;
}
/* 内容 */
.Thematicmap .maintools .content {
  display: none;
}
.Thematicmap .maintools .son {
  display: block;
  animation: fade-in;
  animation-duration: 1s;
  -webkit-animation: fade-in 1s;
}
</style>
