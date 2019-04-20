<template>
  <div>
    <Form ref="form" v-if="Object.keys(valueList).length" :label-width="labelWidth" :model="valueList" :rules="rules">
      <FormItem 
        v-for="(item, index) in  list" 
        :key="`${_uid}_${index}`" 
        :label="item.label"
        label-position="left"
        :prop="item.name"
        :error="errorStore[item.name]"
        @click.native="handleFocus(item.name)"
      >
        <component :is="item.type" :range="item.range" v-model="valueList[item.name]">
          <template v-if="item.children">
            <component 
              v-for="(child, i) in item.children.list" 
              :is="item.children.type" 
              :value="child.value" 
              :key="`${_uid}_${i}`"
              :label="child.label">
                {{child.title}}
            </component>
          </template>
        </component>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary">提交</Button>
        <Button @click="handleReset" type="error">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import clonedeep from 'clonedeep'
import { sentFormData } from '@/api/form'
export default {
  name: 'FormGroup',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      initValueList: [],
      valueList: {},
      rules: {},
      errorStore: {}
    }
  },
  watch: {
    list () {
      this.setInitValue();
    }
  },
  methods: {
    setInitValue () {
      let rules = {}
      let valueList = {}
      let initValueList = {}
      let errorStore = {}
      this.list.forEach(item => {
        rules[item.name] = item.rule
        valueList[item.name] = item.value
        initValueList[item.name] = item.value
        errorStore[item.name] = ''
      })
      console.log(rules, valueList);
      this.rules = rules
      this.valueList = valueList
      this.initValueList = initValueList
      this.errorStore = errorStore
    },
    handleReset () {
      this.valueList = clonedeep(this.initValueList);
    },
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          sentFormData({
            url: this.url,
            data: this.valueList
          }).then(res => {
            console.log(res)
            this.$emit('on-submit-success', res)
          }).catch(err => {
            console.log(err)
            for (let key in err) {
              this.errorStore[key] = err[key]
            }
            this.$emit('on-submit-error', err)
          })
        }
      })
    },
    handleFocus (name) {
      this.errorStore[name] = '';
    }
  },
  mounted () {
    this.setInitValue()
  }
}
</script>

<style>

</style>
