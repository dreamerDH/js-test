<template>
  <div class="demo1"></div>
</template>

<script>
  import point from './../utils/point'
  export default {
    data(){
      return {

      }
    },
    mounted(){
      // console.log('point',point)
      // console.log('typeof point',typeof point)
      // console.log('Point === Point.prototype.constructor',point === point.prototype.constructor)

      // var a = new point(2,3)
      // var b = new point(3,2)
      // console.log('a.toString === point.prototype.toString',a.toString === point.prototype.toString)
      // console.log('a.constructor === point.prototype.constructor',a.constructor === point.prototype.constructor)

      //类的内部所有定义的方法，都是不可枚举的
      // console.log('Object.keys(point.prototype)',Object.keys(point.prototype))

      // console.log('Object.getOwnPropertyNames(point.prototype)',Object.getOwnPropertyNames(point.prototype))
      // a.doStuff()

      // console.log('a.hasOwnProperty(`x`)',a.hasOwnProperty('x'))
      // console.log('a.hasOwnProperty(`y`)',a.hasOwnProperty('y'))
      // console.log('a.hasOwnProperty(`toString`)',a.hasOwnProperty('toString'))
      // console.log('a.__proto__.hasOwnProperty(`toString`)',a.__proto__.hasOwnProperty('toString'))
      // console.log('a._proto_',a._proto_)

      // a.__proto__.printName = function(){
      //   return 'Oops';
      // }
      // console.log('a.printName()',a.printName())
      // console.log('b.printName()',b.printName())

      // var c = new point(1,1)
      // console.log('c.printName',c.printName())

      // console.log('a.prop',a.prop)
      // console.log('a.prop = 123',a.prop = '123')

      // console.log('point.classMethod',point.classMethod())
      // console.log('a.classMethod',a.classMethod())

      // class childPoint extends point {
      //   static classMethod() {
      //     return super.classMethod() + ', too';
      //   }
      // }

      console.log(childPoint.classMethod())
    },
    methods:{

    }
  }
</script>
