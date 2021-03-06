import seriaFn from '../seriaFn'

const {
  growthRate,
  normalize,
  findMinY,
  findMaxY,
  filterTrimZero,
  mean,
  median
} = seriaFn;

const _crInArr = (arr) => arr
  .map((v, i) => ({ x: i+1, y: v }));
const _crOutArr = (arr) => arr
  .map((v, i) => ([ i+2, v]));

describe('calc seria growRate', ()=>{
  const fn = growthRate;
  test('should return empty arr in edge case for unput data arr', ()=>{
    expect(fn()).toEqual([])
    expect(fn(null)).toEqual([])
    expect(fn('')).toEqual([])
    expect(fn(4.5)).toEqual([])
    expect(fn(()=>{})).toEqual([])

    expect(fn([{ x: 1, y: 1 }])).toEqual([])
  })

  test('should calc growthRate by 0, 0', ()=>{
    const _dIn = _crInArr([1.0001, 1.0001, 1.0001])
        , _dOut = _crOutArr([0, 0])
        , _dR = fn(_dIn);
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })

  test('should calc growthRate as null in case null value', ()=>{
    const _dIn = _crInArr([1.0001, null, 1.0001])
        , _dOut = _crOutArr([null, null])
        , _dR = fn(_dIn);
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })


  test('should calc growthRate by 100, 50', ()=>{
    const _dIn = _crInArr([1.00001, 2.00002, 3.00003])
        , _dOut = _crOutArr([100, 50])
        , _dR = fn(_dIn);
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })

  test('should calc growthRate with presicion of 2 digits by -33.33, -49.75', ()=>{
    const _dIn = _crInArr([3.00003, 2.00002, 1.005])
       , _dOut = _crOutArr([-33.33, -49.75])
       , _dR = fn(_dIn);
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })
  test('should calc growthRate with presicion of 2 digits by 0.01, 0', ()=>{
    const _dIn = _crInArr([100, 100.01, 100.011])
        , _dOut = _crOutArr([0.01, 0])
        , _dR = fn(_dIn);
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })

  test('should fill to null for zero old values', ()=>{
    const _dIn = _crInArr([0, 0, 1, 1])
        , _dOut = _crOutArr([0, null, 0])
        , _dR = fn(_dIn)
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })

  test('should calc growth rate from 0 to values as 0, 100, -100 or null', ()=>{
    const _dIn = _crInArr([0, 2, 0, 0, -3, 0])
        , _dOut = _crOutArr([null, -100, 0, null, 100])
        , _dR = fn(_dIn)
    _dR.forEach((p, i) => {
      expect(p).toEqual(_dOut[i])
    })
  })

  test('should use rt param as number & string', ()=>{
    const _dIn = _crInArr([1.0001, 1.0001, 1.0001])
    , _dIn2 = _crInArr([100.0001, 200.0002, 300.0003])

    expect(fn(_dIn, 2)).toEqual([[3, 0]])
    expect(fn(_dIn, '2')).toEqual([[3, 0]])
    expect(fn(_dIn2, 2)).toEqual([[3, 200]])
    expect(fn(_dIn2, '2')).toEqual([[3, 200]])
  })

})


describe('normalize', ()=>{
  const fn = normalize
  test('should return arr with normalize data', ()=>{
    const dataArr = [[1,10],[2,20]];
    expect(fn(dataArr)).toEqual([[1,100], [2, 200]])

    const dataObj = [{x:1,y:10},{x:2,y:20}];
    expect(fn(dataObj)).toEqual([[1,100], [2, 200]])
  })
  test('should return [] in in edge case for data input', ()=>{
    expect(fn()).toEqual([])
    expect(fn(null)).toEqual([])
    expect(fn([])).toEqual([])
    expect(fn([null])).toEqual([])
    expect(fn([{y:0},{y:1}])).toEqual([])
  })
})

describe('findMinY', ()=>{
  const fn = findMinY
  test('should return min y value from data', ()=>{
    expect(fn([{y:0},{y:1},{y:null}])).toBe(0)
    expect(fn([[1,0],[2,1],[3,null]])).toBe(0)
  })
  test('should return undefined in edge case for input data', ()=>{
    expect(fn()).toBe(undefined)
    expect(fn(null)).toBe(undefined)
    expect(fn({})).toBe(undefined)
    expect(fn([])).toBe(undefined)
  })
  test('should return undefined in edge case for input data values', ()=>{
    expect(fn([[1,NaN],[3,null]])).toBe(undefined)
  })
})

describe('findMaxY', ()=>{
  const fn = findMaxY
  test('should return max y value from data', ()=>{
    expect(fn([{y:0},{y:1},{y:null}])).toBe(1)
    expect(fn([[1,0],[2,1],[3,null]])).toBe(1)
  })
  test('should return undefined in edge case for input data', ()=>{
    expect(fn()).toBe(undefined)
    expect(fn(null)).toBe(undefined)
    expect(fn({})).toBe(undefined)
    expect(fn([])).toBe(undefined)
  })
  test('should return undefined in edge case for input data values', ()=>{
    expect(fn([[1,NaN],[3,null]])).toBe(undefined)
  })
})


describe('filterTrimZero', ()=>{
  const fn = filterTrimZero
  test('should trim points with 0 or null values', ()=>{
    const dataArr = [[1,0],[2,1],[3, null]]
    expect(fn(dataArr)).toEqual([[2,1]])

    const dataObj = [{y:0},{y:1},{y:null}]
    expect(fn(dataObj)).toEqual([{y:1}])

    const dataArr2 = [[1,1],[2,2],[3,3]]
    expect(fn(dataArr2)).toEqual(dataArr2)

  })
  test('should return echo input in edge case for input',()=>{
    expect(fn()).toBe(undefined)
    expect(fn(null)).toBe(null)
    expect(fn([])).toEqual([])
  })
})

describe('mean', ()=>{
  const fn = mean
  test('should return arr with two mean points from data', ()=>{
    expect(fn([[1, 1], [2, 1], [3, 1]])).toEqual([[1,1], [3,1]])
  })
  test('should return arr with two mean points from data with null, NaN', ()=>{
    expect(fn([[1, null], [2, 3], [3, NaN]])).toEqual([[1,3], [3,3]])
  })
  test('should return [] in edge case for input', ()=>{
    expect(fn()).toEqual([])
    expect(fn(null)).toEqual([])
    expect(fn([])).toEqual([])
  })
})

describe('median', ()=>{
  const fn =median
  test('should return arr with two median points from data', ()=>{
    expect(fn([[1, 1], [2, 2], [3, 3]])).toEqual([[1,2], [3,2]])
    expect(fn([[1, 1], [2, 2], [3, 3],[4, 4]])).toEqual([[1,3], [4,3]])
  })
  test('should return [] in edge case for input', ()=>{
    expect(fn()).toEqual([])
    expect(fn(null)).toEqual([])
    expect(fn([])).toEqual([])
  })
})
