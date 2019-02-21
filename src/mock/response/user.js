import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'langNan', //重复langNan至少三次，最多四次
    'name|5': 'mock', //重复5次
    'age|+2': 18, //每次循环加2
    'num|4-10': 0,//生成一个大于等于4且小于等于10的整数
    'float|3-10.2-5': 0, //生成一个大于等于3且小于等于10，小数位是2到5位的浮点数(包含2和5)
    'bool|1': true,//值为true的概率是1/2
    'boo2|1-9': true, //值为true的概率是1/10 min/(min+max),false的概率是9/10
    'obj|2': { //从对象中随机抽取两个属性
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': { //从对象中随机抽取1到2个属性
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': ['1','2','3'], //重复数组的值2到4次
    'arr2|2': ['langNan','lison'], //重复指定的次数
    'func': ()=> {
      return 'this is a create function'
    },
    'reg': /[1-9] [a-z]/,
    'email': Random.email(),//生成email格式的字符串
    'eamil2': Mock.mock('@email'),//使用占位符生成email格式的字符串
    'rang': Random.range(3, 10, 2), //返回以一个数组,以3位开始值，步长位2，小于10
    'date': Random.date('yyyy-MM-dd'),
    'time': Random.time('HH:mm'),
    'datetime': Random.datetime('yyyy-MM-dd HH:mm'),
    'now': Random.now('hour', 'yyyy-MM-dd HH:mm'),//截止到当前时间的小时位
    'img': Random.image('125x125', '00ff00', '#ff0000', 'png', 'langNan'),

  }
  // let i = 3;
  // let arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  return Mock.mock(template)//返回一个模板
}