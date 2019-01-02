<template>
<div>
  <div class="angular">
    <app-root :number="count" :message="textData" v-on:countChange="handleCountChange"></app-root>
  </div>
  <div style="padding: 0px 20px">
    <md-field>
      <label>Message</label>
      <md-input v-model="textData"></md-input>
    </md-field>
  </div>


  <h3>{{textData}}</h3>
  <h3>{{count}}</h3>

  <md-button class="md-raised md-primary" v-on:click="increaseCount">Increase the counter</md-button>
  <md-button class="md-raised md-accent" v-on:click="decreaseCount">Decrease the counter</md-button>
</div>


</template>

<script>
import Vue from 'vue'
import { MdButton, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdField)


export default {
  name: 'HelloWorld',
  props: {
    message: {
        type: String,
        default: "Hello this is Vue message"
    },
    number:{
      type: Number,
        default: 0
    }
  },
   data: function () {
     return {
         count:   this.number,
         textData: this.message
     }
   },
    methods: {
        increaseCount() {
            /*let count = */++this.count
            //this.$emit('counter-updated', count)
        },
        decreaseCount() {
            --this.count
        },
        handleCountChange(event){
            this.count = event.detail
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.angular{
  border-style: solid;
  border-color: #99050a;
  margin: 30px;
  padding-bottom: 20px;
}

</style>
