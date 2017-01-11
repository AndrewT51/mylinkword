
var logic = (function(){
  let _arrayOfArrays;
  let _revisionSlides;

  populateArrayOfArrays = (data) => {
    _arrayOfArrays = [[]]
    _revisionSlides = [];
    data.forEach((datum) => {
      _arrayOfArrays[ _arrayOfArrays.length - 1 ].push(datum)
      if ( datum.initiateRevision ){
        _arrayOfArrays.push([])
      }
    })
    return _arrayOfArrays.reduce((acc,arr) => {
      return acc.concat(_separateSlidesToTest(arr))
    },[])
  },

  _separateSlidesToTest = (data) => {
    var dataCopy = data.map((word) => {
      if (!word.grammar){
        _revisionSlides.push(word)  
      }
      return word
    }) 
    return dataCopy.concat(_composeForRevision())
  },

  _createRevisionSlides = (lang) => {
    return _revisionSlides.map((word, index) => {
      return Object.assign({
        answer: '',
        lang: lang
      },word)
    }).reverse()  
  },

  _composeForRevision = () => {
    var allTestSlides = _createRevisionSlides(['en','sp']).concat(_createRevisionSlides(['sp','en']))
    _revisionSlides = [];
    return allTestSlides
  }

  return {
    generateFullData: populateArrayOfArrays
  }
  
})()

export default logic;