import React from 'react';
import Highcharts from 'highcharts';

import ButtonTab from './zhn/ButtonTab';

const styles = {
  rootDivShow : {
    position : 'relative',
    display : 'block'
  },
  rootDivHide : {
    position : 'relative',
    display : 'none'
  }
};

const ZhHighchart = React.createClass({

  displayName: 'ZhHighchart',

  componentDidMount(){
    this.renderChart(this.props.config);
  },

  componentWillUnmout(){
    this.chart.destroy();
  },

  renderChart(config){
    if (!config){
      throw new Error('Config must be specified for the ZhHighchart');
    }

    const chartConfig =  config.chart;
    this.chart = new Highcharts['Chart']({
      //...this.props.config,
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart
      }
    });
  },


  render() {
    const {isShow, onClickInfo} = this.props;
    const _styleRootDiv = isShow ?
                 styles.rootDivShow : styles.rootDivHide;
     return (
       <div style={_styleRootDiv}>
          <ButtonTab
            caption={'Info'}
            onClick={onClickInfo}
          />
          <div ref="chart">
          </div>
        </div>
     )
  },

  getChart(){
    if(!this.chart){
      throw new Error('getChart() should not called before the ZhHighchart component is mounted');
    }
    return this.chart;
  }

})

export default ZhHighchart;
