
const _isBool = v => typeof v === 'boolean';
let _isSupportOptions;
const onceOptions = {
  get once(){
    _isSupportOptions = true
    return true;
  }
};

const isSupportOptions = () => {
  if (_isBool(_isSupportOptions)){
    return _isSupportOptions;
  }
  try {
    window.addEventListener('test', onceOptions, onceOptions)
    window.removeEventListener('test', onceOptions, onceOptions)
  } catch(err) {
    _isSupportOptions = false
  }
  return _isSupportOptions;
};

export default isSupportOptions
