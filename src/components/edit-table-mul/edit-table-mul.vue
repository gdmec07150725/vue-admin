<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTableMul',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      insideData: [],
      edittingId: '',
      insideColumns: [],
      edittingContent:''
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    },
    value () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick ({row, index, column}) {
      console.log(row, index, column)
      let keyIndex = this.insideData[index].edittingKeyArr ? this.insideData[index].edittingKeyArr.indexOf(column.key) : -1
      let rowObj = this.insideData[index]
      if (keyIndex > -1) {
        //保存方法
        rowObj.edittingKeyArr.splice(keyIndex, 1)
        this.insideData.splice(index, 1, rowObj)
        this.$emit('input', this.insideData);
        this.$emit('on-edit', {row, index, column, newValue: this.insideData[index][column.key]});
      } else {
        rowObj.edittingKeyArr = rowObj.edittingKeyArr ? [...rowObj.edittingKeyArr, column.key] : [column.key]
        this.insideData.splice(index, 1, rowObj)
      }
    },
    handleInput ( row, index, column, newValue) {
      console.log('newValue', newValue)
      this.insideData[index][column.key] = newValue
    },
    handleColumns () {
      this.insideData = clonedeep(this.value)
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {         
          item.render = (h, { row, index, column }) => {
            // console.log(row, index, column) row: 行对象，index: 行号，column： 列对象
            const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : []
            return (
              //最外层必须包含一个div
              <div>
                {keyArr && keyArr.indexOf(column['key']) > -1 
                ? <i-input value={row[column.key]} on-input={this.handleInput.bind(this, row, index, column)} style="width: 50px;"></i-input> 
                : row[column.key] }
                <i-button on-click={this.handleClick.bind(this, {row, index, column})}>{keyArr && keyArr.indexOf(column['key']) > -1 ? '保存' : '编辑'}</i-button>
              </div>
            )
          }
          return item
        }else return item
      })
    this.insideColumns = insideColumns
    }
  },
  mounted () {
    this.handleColumns()
  }
}
</script>

<style>

</style>
