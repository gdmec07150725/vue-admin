<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTable',
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
      edittingId: '',
      insideColumns: [],
      edittingContent:''
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick ({row, index, column}) {
      console.log(row, index, column)
      if ( this.edittingId === `${column.key}_${index}`) {
        //保存方法
        let tableData = clonedeep(this.value);
        tableData[index][column.key] = this.edittingContent;
        this.$emit('input', tableData);
        this.$emit('on-edit', {row, index, column, newValue: this.edittingContent});
        this.edittingId = '';
        this.edittingContent = '';
      } else {
         this.edittingId = `${column.key}_${index}`
      }
    },
    handleInput (newValue) {
      this.edittingContent = newValue
    },
    handleColumns () {
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            // console.log(row, index, column) row: 行对象，index: 行号，column： 列对象
            const isEditting = this.edittingId === `${column.key}_${index}`
            return (
              //最外层必须包含一个div
              <div>
                {isEditting ? <i-input value={row[column.key]} on-input={this.handleInput.bind(this)} style="width: 50px;"></i-input> : row[column.key] }
                <i-button on-click={this.handleClick.bind(this, {row, index, column})}>{isEditting ? '保存' : '编辑'}</i-button>
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
