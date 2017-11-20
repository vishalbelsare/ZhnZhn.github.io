
const C = {
  ROOT_URL: 'http://data.ssb.no/api/v0/en/table'
};

const _crTidTop = (v) => {
  return {
    code: "Tid",
    selection: {
      filter: "top",
      values: [ ''+v ]
    }
  };
}

const StatNorway2Api = {
  getRequestUrl(option){
    const { proxy, metric, dfId } = option
        , id = dfId ? dfId : metric;
    return `${proxy}${C.ROOT_URL}/${id}`;
    //return `${C.ROOT_URL}/${id}`;
  },

  crOptionFetch(option){
    const { items, isTop12, isTop6 } = option
        , arrQuery = [];
    items.forEach(item => {
       const slice = item.slice;
       let propName;
       for(propName in slice){
         arrQuery.push({
           code: propName,
           selection: {
             filter: 'all',
             values: ['*']
           }
         })
       }
    })

    if (isTop12) {
      arrQuery.push(_crTidTop("12"))
    }
    if (isTop6) {
      arrQuery.push(_crTidTop("6"))
    }

    const r = {
      method: 'POST',
      body: JSON.stringify({
         query: arrQuery,
         response: {
            format: "json-stat"
         }
      })
    };
    return r;
  },

  checkResponse(){
    return true;
  }
}

export default StatNorway2Api