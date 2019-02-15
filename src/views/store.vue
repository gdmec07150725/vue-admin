<template>
  <div>
    This app name is {{appName}}!
    <p>Hello {{userName}}</p>
    <!-- <p>The version is {{appNameWithVersion}}</p> -->
    <p>The version is {{appVersion}}</p>
    <!-- <p>firstLetter is {{firstLetter}}</p> -->
    <p>{{Version}}</p>
    <button @click="changeAppName">修改appName</button>
    <button @click="changeUserName">修改用户名称</button>
    <button @click="registerModule">动态注册module</button>
    <p v-for="(li, index) in todoList" :key="index">{{li}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default{
  data(){
    return{

    }
  },
  computed:{
    //获取state的值
    // appName(){1.使用普通的方法获取
    //   return this.$store.state.appName
    // },
    userName(){
      return this.$store.state.user.userName
    },
    // ...mapState([ //2.传入一个数组(只能获取到外层的state)
    //   'appName',
    //   'Version',
    // ]),
    ...mapState({ //3.传入一个对象的形式(state为外层的state对象)
      appName: state => state.appName,
      Version: state => state.Version,
      userName: state => state.user.userName,
      todoList: state => state.todo ? state.todo.todoList : []
    }),
    // ...mapState('user',{ //4.使用命名空间的方法，需要在对应的store文件里面将namespcaced设置为true
    //   userName: state=> state.userName
    // }),
    
    //获取getters的值
    // appVersion(){1.使用普通的方法获取
    //   return this.$store.getters.appNameWithVersion
    // },
    ...mapGetters([//2.获取最外层的getters
      'appVersion'
    ]),
    // ...mapGetters('user',[//3.获取指定module的getters
    //   'firstLetter'
    // ])

    //触发mutation说的更新：1.提交一个commit 2.触发dispatch
  },
  methods:{
    ...mapMutations([
      'CHANGE_APP_NAME',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    changeAppName(){
      //同步操作使用commit
      // 1.使用字符串方式
      // this.$store.commit('changeAppName','newAppName');
      // 2.使用对象的方式
      // this.$store.commit({
      //   type:'changeAppName',
      //   appName:'newAppName'
      // })
      this.$store.commit('VERSION','3.0')
      //3.使用mapMutations
      // this.CHANGE_APP_NAME({
      //   appName:'newAppName'
      // })
      //异步操作
      //1.使用mapActions
      this.updateAppName()
      //2.使用dispatch
      // this.$store.dispatch('updateAppName')
    },
    changeUserName(){
      this.SET_USER_NAME('vue-course');
    },
    //动态注册模块
    registerModule(){
      this.$store.registerModule('todo',{
        state: {
          todoList:[
            '学习state',
            '学习actions'
          ]
        },
        getters:{

        },
        mutations:{

        },
        actions:{

        },
      })
    }
  }
}
</script>
