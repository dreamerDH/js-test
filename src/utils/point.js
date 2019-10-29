class Point {
  static myStaticProp = 42;
  constructor(x,y){
    this.x = x
    this.y = y
  }
  static classMethod() {
    return this.myStaticProp;
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
  toString(){
    return '(' + this.x + ', ' + this.y + ')';
  }

  doStuff() {
    console.log('stuff');
  }
}

export default Point;
