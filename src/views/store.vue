<template>
  <div>
    <!-- This app name is {{appName}}! -->
    <p>Hello {{userName}}</p>
    <!-- <p>The version is {{appNameWithVersion}}</p> -->
    <p>The version is {{appVersion}}</p>
    <p>firstLetter is {{firstLetter}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
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
    // userName(){
    //   return this.$store.state.user.userName
    // }
    // ...mapState([ //2.传入一个数组(只能获取到外层的state)
    //   'appName'
    // ]),
    // ...mapState({ //3.传入一个对象的形式(state为外层的state对象)
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // }),
    ...mapState('user',{ //4.使用命名空间的方法，需要在对应的store文件里面将namespcaced设置为true
      userName: state=> state.userName
    }),
    
    //获取getters的值
    // appVersion(){1.使用普通的方法获取
    //   return this.$store.getters.appNameWithVersion
    // },
    ...mapGetters([//2.获取最外层的getters
      'appVersion'
    ]),
    ...mapGetters('user',[//3.获取指定module的getters
      'firstLetter'
    ])
  }
}
</script>
