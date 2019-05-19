<template>
  <div>
    <span class="title">单个编辑</span>
    <edit-table :columns="columns_single" v-model="tableData_single" @on-edit="handleEditSingle"></edit-table>
    <span class="title">多个编辑</span>
    <edit-table-mul :columns="columns" v-model="tableData" @on-edit="handleEdit"></edit-table-mul>
    <Button @click="turnTo">打开参数页</Button>
  </div>
</template>

<script>
import { getTableData } from '@/api/table'
import EditTable from '_c/edit-table'
import EditTableMul from '_c/edit-table-mul'
export default {
  name: 'Table',
  components: {
    EditTable,
    EditTableMul
  },
  data () {
    return {
      tableData: [],
      tableData_single: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true},
        { key: 'email', title: '邮箱', editable: true},
      ],
      columns_single: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true},
        { key: 'email', title: '邮箱', editable: true},
      ]
    }
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res;
      this.tableData_single = res;
    })
  },
  methods: {
    turnTo () {
      let id = 'params' + (Math.random() * 100).toFixed(0)
      this.$router.push({
        name: 'param',
        params: {
          id
        }
      })
    },
    handleEdit ({row, index, column, newValue}) {
      console.log({row, index, column, newValue})
    },
    handleEditSingle ({row, index, column, newValue}) {
      console.log({row, index, column, newValue})
    }
  }
}
</script>

<style lang="less">
.title{
  display: block;
  margin: 10px 0;
  font-weight: 600;
}
</style>
