function rgb2hex(r, g, b) {
  var rs = ['0',Math.round(r).toString(16)].join('');
  var gs = ['0',Math.round(g).toString(16)].join('');
  var bs = ['0',Math.round(b).toString(16)].join('');
  
  return ['#', rs.substring(rs.length - 2), gs.substring(gs.length - 2), bs.substring(bs.length - 2)].join('');
}

module.exports = function() {
  
  var result = Ti.UI.createWindow({
    title: 'Toolbar Colors',
    backgroundColor: 'white',
  });

  var view = Ti.UI.createScrollView({
    height: Ti.UI.FILL,
    contentHeight: 'auto',
    layout: 'vertical'
  });
  
  var send = Titanium.UI.createButton({
      title: 'Send',
      style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
  });

  var camera = Titanium.UI.createButton({
      systemButton: Titanium.UI.iPhone.SystemButton.CAMERA,
  });

  var cancel = Titanium.UI.createButton({
      systemButton: Titanium.UI.iPhone.SystemButton.CANCEL
  });

  flexSpace = Titanium.UI.createButton({
      systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
  });

  var toolbar = Titanium.UI.iOS.createToolbar({
      items:[send, flexSpace, camera, flexSpace, cancel],
      bottom:0,
      borderTop:true,
      borderBottom:false
  }); 
  view.add(toolbar);

  view.add(Ti.UI.createLabel({
    text: 'red'
  }));
  var r = Ti.UI.createSlider({
    left: 10,
    right: 10,
    min: 0,
    max: 254,
    value: 128,
  });
  view.add(r);
  
  view.add(Ti.UI.createLabel({
    text: 'green'
  }));
  var g = Ti.UI.createSlider({
    left: 10,
    right: 10,
    min: 0,
    max: 254,
    value: 128,
  });
  view.add(g);
  
  view.add(Ti.UI.createLabel({
    text: 'blue'
  }));
  var b = Ti.UI.createSlider({
    left: 10,
    right: 10,
    min: 0,
    max: 254,
    value: 128,
  });
  view.add(b);
  
  var b1 = Ti.UI.createButton({
    title: 'Set Tint Color'
  });
  b1.addEventListener('click', function(e) {
    toolbar.tintColor = rgb2hex(r.value, g.value, b.value);
    Ti.API.info('bar tint: '+toolbar.tintColor);
  });
  view.add(b1);

  result.add(view);
  
  return result;
};
