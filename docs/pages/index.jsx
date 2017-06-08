export default {
  documents: {
    'quick-start':  require('./quick-start'),
  },
  components: {
    'Basic': {
      'layout':     require('./layout'),
      'icon':       require('./icon'),
      'buttons':    require('./buttons'),
    },
    'Form': {
      'checkbox':  require('./checkbox'),
      'switch':     require('./switch'),
      'form':       require('./form'),
      'input':       require('./input'),
    },
    'Data Display': {
      'calendar':   require('./calendar'),
      'table':     require('./table'),
      'tooltip':   require('./tooltip'),
      'tag':        require('./tag'),
    },
    'Navigation': {
      'paging':     require('./paging')
    },
    'Feedback':{
      'alert':     require('./alert'),
      'modals':     require('./modals'),
      'message':   require('./message'),
      'loading':    require('./loading'),
      'transition': require('./transition'),
    }
  }
}
