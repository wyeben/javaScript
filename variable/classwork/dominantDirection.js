function characterScript(code) {
    const scripts = {
      0: { direction: 'none' },  
      66: { direction: 'ltr' },  
      80: { direction: 'rtl' },  
    
};
  
    return scripts[code] || { direction: 'none' };
}
function dominantDirection(text) {
    const countDirection = (direction) => text.split('').filter(char => {
      const script = characterScript(char.codePointAt(0));
      return script ? script.direction === direction : false;
    }).length;
  
    const ltrCount = countDirection("ltr");
    const rtlCount = countDirection("rtl");
  
    return ltrCount > rtlCount ? "ltr" : "rtl";
  }
  
  console.log(dominantDirection("Hello, 你好!"));
  