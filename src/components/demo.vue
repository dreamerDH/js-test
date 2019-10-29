<template>
    <div ref="parent" class="parent">
        <div class="child-1">
            <div class="child-1-1">
                <div class="child-1-1-1">
                    a
                </div>
            </div>
            <div class="child-1-2">
                <div class="child-1-2-1">
                    b
                </div>
            </div>
            <div class="child-1-3">
                c
            </div>
        </div>

        <div class="child-2">
            <div class="child-2-1">
                d
            </div>
            <div class="child-2-2">
                e
            </div>
        </div>
        <div class="child-3">
            <div class="child-3-1">
                f
            </div>
        </div>
    </div>
</template>

<script>
    import demo from '../utils/demo.js'
  export default {
    data(){
      return {

      }
    },
    mounted(){
      // console.log(this.$refs.parent)
      let parent = this.$refs.parent
      console.log('deepTraversal1',this.deepTraversal1(parent))
      console.log('deepTraversal2',this.deepTraversal2(parent))
      console.log('deepTraversal3',this.deepTraversal3(parent))
      console.log('widthTraversal2',this.widthTraversal2(parent))
    },
    methods:{
      // 深度优先遍历  使用递归的 deepTraversal1, deepTraversal2
      deepTraversal1(node,nodeList = []){
        if(node !== null){
          nodeList.push(node);
          let children = node.children;
          for(let i = 0; i < children.length; i++){
            this.deepTraversal1(children[i], nodeList)
          }
        }
        return nodeList
      },

      deepTraversal2(node){
        let nodes = []
        if (node !== null) {
          nodes.push(node)
          let children = node.children
          for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(this.deepTraversal2(children[i]))
          }
        }
        return nodes
      },
      //非递归
      deepTraversal3(node){
        let stack = []
        let nodes = []
        if(node){
          // 推入当前处理的node
          stack.push(node)
          while(stack.length){
            let item = stack.pop()
            let children = item.children
            nodes.push(item)
            // node = [] stack = [parent]
            // node = [parent] stack = [child3,child2,child1]
            // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]
            // node = [parent, child1-1] stack = [child3,child2,child1-2]
            for (let i = children.length - 1; i >= 0; i--) {
              stack.push(children[i])
            }
          }
        }
        return nodes;

      },
      //广度优先遍历
      widthTraversal2(node){
        let nodes = []
        let stack = []
        if (node) {
          stack.push(node)
          while (stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
              // 队列，先进先出
              // nodes = [] stack = [parent]
              // nodes = [parent] stack = [child1,child2,child3]
              // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
              // nodes = [parent,child1,child2]
            for (let i = 0; i < children.length; i++) {
              stack.push(children[i])
            }
          }
        }
        return nodes
      }
    }
  }
</script>

<style>

</style>


