
const createLoadOptions = (props={}, options={}) => {
  const { loadId, group, dataSource, dfProps } = props
      , { one, two } = options
      , { value:oneValue, caption:oneCaption='' } = one
      , { value:twoValue, caption:twoCaption='', mapSlice } = two;
  return {
    ...dfProps,
    seriaType: 'AREA',
    geo : oneValue,
    group : group,
    metric : twoValue,
    loadId : loadId,
    itemCaption: oneCaption,
    title : oneCaption,
    subtitle : twoCaption,
    alertItemId : `${oneCaption}:${twoCaption}`,
    alertGeo : oneCaption,
    alertMetric : twoCaption,
    dataSource, mapSlice,
    items: [ one, two ]
  }
}

export default createLoadOptions
