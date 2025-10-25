let expr = '';
const disp = () => document.getElementById('display').value = expr;
function press(x){ expr += x; disp(); }
function clearAll(){ expr=''; disp(); }
function calc(){
  try{
    const result = Function('"use strict";return ('+expr+')')();
    expr = String(result);
  }catch(e){expr='Error';}
  disp();
}
