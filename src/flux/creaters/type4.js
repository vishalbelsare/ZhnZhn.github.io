
const createLoadOptions = (props={}, options={}) => {
  const {
          fnValue, dataColumn, loadId, dataSource,
          isPremium
        } = props
      , { one, two, fromDate, toDate } = options
      , _value = (typeof fnValue === 'function')
           ? fnValue(one.value, two.value)
           : undefined
  return {
       value : _value,
       fromDate: fromDate,
       toDate: toDate,
       dataColumn : dataColumn,
       loadId : loadId,
       title : one.caption,
       subtitle : two.caption,
       isPremium : isPremium,
       dataSource: dataSource
    }
}

export default createLoadOptions
