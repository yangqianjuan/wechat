<template>
  <div class="chart">
    <div class="chartTitle">
      9月24日门店客流<span>784</span>人
    </div>
    <div class="drawChart">
      <div class="gender">
        <div class="chartName">
          <svg-icon
            style="width:17px;height:17px"
            icon-class="top-a"
          />
          <span>客流男女比例</span>
        </div>
        <div class="genderChart">
          <div class="female">
            <span class="percent">20%</span>
            <span class="person">111</span>
            <svg-icon
              style="width:49px;height:52px"
              icon-class="female-sm"
            />

          </div>
          <div class="male">
            <span class="percent">20%</span>
            <span class="person">111</span>
            <svg-icon
              style="width:49px;height:52px"
              icon-class="female-sm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="drawChart">
      <div class="chartName">
        <svg-icon
          style="width:17px;height:17px"
          icon-class="top-b"
        /> <span>客流年龄分布</span>
      </div>
      <canvas
        id="ageChart"
        style="width:100%;height:238px"
      ></canvas>
    </div>
    <div class="drawChart">
      <div class="chartName">
        <svg-icon
          style="width:17px;height:17px"
          icon-class="top-c"
        />
        <span>9月24日客流趋势</span>
      </div>
      <canvas
        id="trendChart"
        style="width:100%;height:238px"
      ></canvas>
    </div>
    <div class="drawChart">
      <div class="chartName">
        <svg-icon
          style="width:17px;height:17px"
          icon-class="top-c"
        />
        <span>过去8天客流趋势</span>
      </div>
      <canvas
        id="sixMonthTrendChart"
        style="width:100%;height:238px"
      ></canvas>
    </div>
  </div>
</template>

<script>
const F2 = require('@antv/f2/lib/index')
export default {
  data() {
    return {
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 }
      ],
      trendData: [{
        country: 'Asia',
        year: '1750',
        value: 1502
      }, {
        country: 'Asia',
        year: '1800',
        value: 1635
      }, {
        country: 'Asia',
        year: '1850',
        value: 1809
      }, {
        country: 'Asia',
        year: '1900',
        value: 5268
      }, {
        country: 'Asia',
        year: '1950',
        value: 2400
      }, {
        country: 'Asia',
        year: '1999',
        value: 3634
      }, {
        country: 'Asia',
        year: '2050',
        value: 1947
      }, {
        country: 'Africa',
        year: '1750',
        value: 1106
      }, {
        country: 'Africa',
        year: '1800',
        value: 1107
      }, {
        country: 'Africa',
        year: '1850',
        value: 1011
      }, {
        country: 'Africa',
        year: '1900',
        value: 1266
      }, {
        country: 'Africa',
        year: '1950',
        value: 1221
      }, {
        country: 'Africa',
        year: '1999',
        value: 767
      }, {
        country: 'Africa',
        year: '2050',
        value: 1330
      }],
      sixMonths: [{
        year: '1750',
        value: 1502
      }, {
        year: '1800',
        value: 1635
      }, {
        year: '1850',
        value: 1809
      }, {
        year: '1900',
        value: 5268
      }, {
        year: '1950',
        value: 2400
      }, {
        year: '1999',
        value: 3634
      }, {
        year: '2050',
        value: 1947
      }, {
        year: '1750',
        value: 1106
      }, {
        year: '1800',
        value: 1107
      }, {
        year: '1850',
        value: 1011
      }, {
        year: '1900',
        value: 1266
      }, {
        year: '1950',
        value: 1221
      }, {
        year: '1999',
        value: 767
      }, {
        year: '2050',
        value: 1330
      }]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.ageChart()
      this.trendChart()
      this.sixMonthCahrt()
    },
    ageChart() {
      const chart = new F2.Chart({
        id: 'ageChart',
        padding: [45, 'auto', 'auto'],
        pixelRatio: window.devicePixelRatio
      })
      chart.source(this.data)
      chart.interval().position('genre*sold').color('genre', ['#05FFFE']).style({ color: '#fff', width: '20' })
      chart.legend(false)
      chart.axis('genre', {
        label: {
          fill: '#fff',
          textAlign: 'end'
        }
      })
      chart.axis('sold', {
        label: {
          fill: '#fff'
          // textAlign: 'center'
        }
      })
      chart.render()
    },
    trendChart() {
      const chart = new F2.Chart({
        id: 'trendChart',
        padding: [45, 'auto', 'auto'],
        pixelRatio: window.devicePixelRatio
      })
      chart.source(this.trendData, {
        year: {
          range: [0, 1]
        }
      })
      chart.legend({
        position: 'bottom',
        offsetY: -10,
        offsetX: 60,
        nameStyle: {
          // textAlign: 'center', // 文本对齐方向，可取值为： start middle end
          fill: '#ffff', // 文本的颜色
          fontSize: 10, // 文本大小
          fontWeight: 'normal', // 文本粗细
          wordSpace: 10
        },
        marker: function marker(x, y, r, ctx) {
          // 11px * 9px
          ctx.save()
          ctx.lineWidth = 2
          ctx.strokeStyle = ctx.fillStyle
          ctx.moveTo(x - 25, y - 4)
          ctx.lineTo(x + 5, y - 4)
          ctx.stroke()
          ctx.restore()
          ctx.moveTo(x - 25, y - 4)
          ctx.lineTo(x + 5, y - 4)
          ctx.lineTo(x + 5, y + 4)
          ctx.lineTo(x - 25, y + 4)
          ctx.closePath()
        }
      })
      chart.axis('value', {
        label: {
          fill: '#fff'
          // textAlign: 'center'
        }
      })
      chart.axis('year', {
        label: {
          fill: '#fff',
          textAlign: 'center'
        }
      })
      // chart.area().position('year*value').color('country')
      chart.line().position('year*value').color('country', ['#39F3B0', '#FEFE95']).size(2)
      chart.point().position('year*value').color('country', ['#39F3B0', '#FEFE95'])
      chart.render()
    },
    sixMonthCahrt() {
      var chart = new F2.Chart({
        id: 'sixMonthTrendChart',
        pixelRatio: window.devicePixelRatio
      })
      chart.source(this.sixMonths, {
        value: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3
        }
      })
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        }
      })
      chart.axis('date', {
        label: function label(text, index, total) {
          var textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.axis('year', {
        label: {
          fill: '#fff',
          textAlign: 'center'
        }
      })
      chart.axis('value', {
        label: {
          fill: '#fff'
          // textAlign: 'center'
        }
      })
      chart.legend(false)
      chart.line().position('year*value').color('value', ['#FFA46E'])
      chart.point().position('year*value').color('year', ['#FFA46E'])
      chart.render()
    }
  }
}
</script>

<style lang='scss' scoped>
.chartTitle {
  font-size: 18px;
  color: #fff;
  max-width: 351px;
  margin: 17px auto 27px;
  padding-left: 2px;
  span {
    font-size: 25px;
  }
}

.chart {
  min-height: 100%;
  background: url("../../image/chart.png");
  background-size: cover;
  // padding-bottom: 12px;
  padding: 0px 12px 12px;
  overflow: auto;
}
.drawChart {
  margin-bottom: 10px;
  text-align: center;
  max-width: 100%;
  background-color: #0253fe;
  border-radius: 8px;
  margin: 0px auto 10px;
  padding-top: 14px;
  .gender {
    height: 182px;
    .chartName {
      margin: 0px 0px 60px 14px;
    }
    .genderChart {
      max-width: 242px;
      height: 57px;
      padding-top: 4px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      background-color: pink;
      .female,
      .male {
        position: relative;
        .person {
          position: absolute;
          bottom: -20px;
          color: #fff;
          left: 50%;
          transform: translateX(-50%);
        }
        .percent {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 58px;
          height: 34px;
          background: url("../../image/pink.png");
          background-size: 58px 34px;
          color: #ffff;
          font-size: 14px;
          line-height: 25px;
        }
      }
    }
  }
  .chartName {
    margin: 0px 0px 0px 14px;
    height: 17px;
    line-height: 17px;
    text-align: left;
    color: #fff;
    font-size: 0px;
    span {
      font-size: 16px;
      display: inline-block;
      vertical-align: top;
    }
    .svg-icon {
      margin-right: 11px;
    }
  }
}
</style>
