
import { CompItemType } from '../../constants/Type'

const T = {
  T2: 't2',
  T3: 't3',
  T3A: 't3a',
  T3A2: 't3a2',
  T4: 't4'
};

const V = {
  A: 'AREA',
  A_Y: 'AREA_YEARLY',
  M: 'MAP',
  C: 'COLUMN',
  C_C: 'COLUMN_CLUSTER' ,
  C_2: 'COLUMN_BY_2',
  B: 'BAR',
  B_C: 'BAR_CLUSTER',
  B_2: 'BAR_BY_2',
  TM: 'TREE_MAP',
  TM_C: 'TREE_MAP_CLUSTER',
  TM_2: 'TREE_MAP_2',
  TM_2_C: 'TREE_MAP_2_CLUSTER'
};

const C = {
  EMPTY: ''
};

const _crDF = () => {
  return [
    { caption : 'Default: Area', value: V.A },
    { caption : 'Map: All Countries' , value: V.M, compType : CompItemType.EUROSTAT_MAP },
    { caption : 'Column: All Countries', value: V.C },
    { caption : 'Bar: All Countries', value: V.B }
  ];
}

const _crT2 = () => {
  return [
    { caption : 'Default: Area', value: V.A },
    { caption : 'Yearly by Months' , value: V.A_Y }
  ];
}

const _crT3 = (oneCaption) => {
  return [
    { caption : 'Default: Spline', value: V.A },
    {
      caption : `Column: By ${oneCaption}`,
      value: V.C,
      dim: oneCaption
    },{
      caption : `Column: By ${oneCaption}: Cluster`,
      value: V.C_C,
      dim: oneCaption
    },{
      caption : `Bar: By ${oneCaption}`,
      value: V.B,
      dim: oneCaption
    },{
      caption : `Bar: By ${oneCaption}: Cluster`,
      value: V.B_C,
      dim: oneCaption
    }
  ];
}

const _crT3A = (oneCaption) => {
  return [
    ..._crT3(oneCaption),
    {
      caption : `TreeMap: By ${oneCaption}`,
      value: V.TM,
      dim: oneCaption
    },{
      caption : `TreeMap: By ${oneCaption}: Cluster`,
      value: V.TM_C,
      dim: oneCaption
    }
  ];
}
const _crT3A2 = (oneCaption) => {
  return [
    ..._crT3A(oneCaption),
    {
      caption : `TreeMap: By ${oneCaption}: Depth 2`,
      value: V.TM_2,
      dim: oneCaption
    },{
      caption : `TreeMap: By ${oneCaption}: Depth 2: Cluster`,
      value: V.TM_2_C,
      dim: oneCaption
    }
  ];
}


const _crT4 = (oneCaption, twoCaption) => {
  return [
    ..._crT3(oneCaption),
    {
      caption : `Column: By ${twoCaption}`,
      value: V.C_2,
      dim: twoCaption
    },{
      caption : `Bar: By ${twoCaption}`,
      value: V.B_2,
      dim: twoCaption
    }
  ]
}

const CATEGORY_TYPES = [
  V.M,
  V.C, V.C_C, V.C_2,
  V.B, V.B_C, V.B_2,
  V.TM, V.TM_C, V.TM_2, V.TM_2_C
];

const _crCaptions = ({
    dims,
    oneCaption=C.EMPTY, twoCaption=C.EMPTY
  }) => {
  if (Array.isArray(dims)){
    return dims.map(dim => dim.c || C.EMPTY);
  } else {
    return [ oneCaption, twoCaption ];
  }
}

const RouterOptions = {
  crOptions(option){
     const { chartsType } = option
          , _captions = _crCaptions(option);
     switch(chartsType){
       case T.T2: return _crT2();
       case T.T3: return _crT3(_captions[0]);
       case T.T3A: return _crT3A(_captions[0]);
       case T.T3A2: return _crT3A2(_captions[0]);
       case T.T4: return _crT4(_captions[0], _captions[1]);
       default: return _crDF();
     }
  },

  isCategory(chartType) {
    if (!chartType) {
      return false;
    }
    return CATEGORY_TYPES
      .indexOf(chartType.value) !== -1;
  }

};

export default RouterOptions