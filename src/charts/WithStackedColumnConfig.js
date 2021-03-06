import Chart from './Chart';
import Tooltip from './Tooltip';


const WithStackedColumnConfig = {

  fBaseStackedColumnConfig({ stacking='normal' }){
    return {
      zhSeries: {
        count: 0
      },
      zhDetailCharts: [],

      credits: Chart.fCreditsRightBottom(),
      chart: {
        type: 'column',
        spacingTop: Chart.STACKED_SPACING_TOP,
        spacingBottom: Chart.SPACING_BOTTOM,

        zoomType: 'xy',
        resetZoomButton : Chart.fResetZoomButton()
      },

      title: Chart.fTitle({ y:Chart.STACKED_TITLE_Y }),
      subtitle: Chart.fSubtitle({ y:Chart.STACKED_SUBTITLE_Y }),
      tooltip: Chart.fTooltip(Tooltip.sparkStackedArea),

      xAxis: Chart.fXAxisOpposite({
        categories: [],
        type: "category",
        startOnTick: false,
        min: 1,
        crosshair: Chart.fCrosshair()
      }),
      yAxis: Chart.fYAxisOpposite(),

      plotOptions: {
         column: Chart.fPlotOptionsColumn({ stacking }),
         series: Chart.fPlotOptionsSeries()
     },
     legend: Chart.fLegend()
   }
 },

 fStackedColumnSeria({zhSeriaId, name, data=[], color='gray'}){
   return {
     zhSeriaId : zhSeriaId,
     name: name,
     data : data,
     borderColor: 'transparent',
     borderWidth : 1,
     color : color,
     fillColor : color,
     fillOpacity: 0.5,
     pointPadding : 0.01,
     marker : {
       radius: 6,
       symbol : 'circle'
     },
     dataLabels : {
       enabled : false,
       format : '{point.percent}',
       color : 'black',
       style : {
         textShadow : 'none'
       }
     },
     states : {
       hover : {
         enabled : true,
         borderColor : 'yellow'
       }
     }
   }
 }

}

export default WithStackedColumnConfig
