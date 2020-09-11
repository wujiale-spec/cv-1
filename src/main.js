let html = document.querySelector("#html"); //通过CSS选择器找到这个元素
let style = document.querySelector("#style");
let string = `
/*你好,我是一名前端新人
 *接下来我要展示我的前端功底
 *首先，准备一个div
*/
 #div1{
   border: 1px solid red;
   width:200px;
   height:200px;
 }
 /*接下来我把div变成一个八卦图
  *首先，首先把div变成一个圆圈
  */
 #div1{
   border-radius:50%;
   box-shadow: 0 0 3px rgba(0,0,0,5);
   border:none;
 }
 /*八卦是阴阳形成的
  *一黑一白
  **/
 #div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
/*加两个神秘的小球
 */
#div1::before{
  width:100px;
  height:100px;
  
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%; 
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%);
} 
#div1::after{
  width:100px;
  height:100px;
  
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%; 
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
} 

`;
let string2 = "";

console.log(string.length);
let n = 0;

let step = () => {
  setTimeout(() => {
    console.log(n);

    if (string[n] === "\n") {
      string2 = string2 + "<br>"; //如果是回车，就不照搬
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp"; //如果是空格，就不照搬
    } else {
      string2 = string2 + string[n]; //如果不是回车就照搬
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999); //js控制浏览器滚动条
    html.scrollTo(0, 9999); //js控制css滚动条
    if (n < string.length - 1) {
      //如果n不是最后一个就继续
      n = n + 1;
      step();
    }
  }, 0);
};
step();
