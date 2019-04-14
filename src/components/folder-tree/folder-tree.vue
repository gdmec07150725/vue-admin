<template>
  <div>
    <Tree :data="folderTree" :render="renderFunc"></Tree>
  </div>
</template>

<script>
import { putFileInFolder, transferFolderToTree, expandSpecifiedFolder } from '@/lib/util'
import cloneDeep from 'clonedeep'
export default {
  name: 'folderTree',
  props: {
    folderList: {
      type: Array,
      defalut: () => []
    },
    fileList: {
      type: Array,
      default: () =>[]
    },
    folderDrop: Array,
    fileDrop: Array,
    beforeDelete: Function
  },
  data () {
    return{
      folderTree: [],
      currentRenameId: '',
      currentRenameContent: '',
      renderFunc: (h,{ root, node, data }) => {
        const dropList = data.type === 'folder' ? this.folderDrop : this.fileDrop;
        const dropdownRender = dropList.map(item => {
          return ( <dropdownItem name={item.name}>{item.title}</dropdownItem>)
        })
        const isRename = this.currentRenameId === `${data.type || 'file'}_${data.id}`;
        return (
          <div class="tree-item">
            { data.type === 'folder' ? <icon type="ios-folder" color="#2d8cf0" style="margin-right: 10px"/> : '' }
            {
              isRename
              ? <span>
                  <i-input value={data.title} on-input={this.handleInput} class="input"></i-input>
                  <i-button size="small" style={{border: 'none'}} on-click={() => this.saveRename(data)}><icon type="md-checkmark"/></i-button>
                  <i-button size="small" style={{border: 'none'}} on-click={this.close}><icon type="md-close"/></i-button>
                </span>
              : <span>{ data.title }</span>
            }
            {
              dropList && !isRename ? <dropdown placement="right-start" on-on-click={this.handleDropdownClick.bind(this, data)}>
              <i-button size="small" type="text" class="tree-item-button">
                <icon type="md-more" size={12}></icon>
              </i-button>
              <dropdownMenu slot='list'>
               { dropdownRender }
              </dropdownMenu>
            </dropdown> : ''
            }
            
          </div>

        ) 
    },
    }
  },
  watch: {
    folderList () {
      this.transData();
    },
    fileList () {
      this.transData();
    }
  },
  methods: {
    transData () {
      this.folderTree = transferFolderToTree(putFileInFolder(this.folderList, this.fileList))
    },
    isFolder (type) {
      return type === 'folder';
    },
    handleDelete (data) {
      const folderId = data.folder_id;
      console.log(folderId);
      const isFolder = this.isFolder(data.type);
      let updateListName = isFolder ? 'folderList' : 'fileList'
      let list = isFolder ? cloneDeep(this.folderList) : cloneDeep(this.fileList);
      list = list.filter(item => item.id !== data.id)
      this.$emit(`update:${updateListName}`, list)
      this.$nextTick(() => {
        expandSpecifiedFolder(this.folderTree, folderId);
      })
    },
    handleDropdownClick (data, name) {
      if (name === 'rename') {
        this.currentRenameId = `${data.type === 'folder' ? 'folder' : 'file'}_${data.id}`
      } else if (name === 'delete') {
        this.$Modal.confirm({
          title: '提示',
          content: `您确定要删除${this.isFolder(data.type) ? '文件夹' : '文件'} 《${data.title}》`,
          onOk: () => {
           this.beforeDelete ?  this.beforeDelete().then(() =>{
              this.handleDelete(data);
           }).catch(() => {
             this.$Message.error('删除失败')
           }) : this.handleDelete(data);
          }
        })
      }
    },
    handleInput (value) {
      this.currentRenameContent = value;
    },
    updateList (list, id) {
      let i = -1;
      let len = list.length;
        while (++i < len) {
          let folderItem = list[i];
          if (folderItem.id === id){
            folderItem.name = this.currentRenameContent;
            list.splice(i, 1, folderItem)
            break;
          }
        }
      return list;
    },
    saveRename (data) {
      const { id, type } = data;
      if (type === 'folder') {
        const list = this.updateList(cloneDeep(this.folderList), id);
        this.$emit('update:folderList', list);
      } else {
        const list = this.updateList(cloneDeep(this.fileList), id);
        this.$emit('update:fileList', list);
      }
      this.currentRenameId = '';
    },
    close () {
      this.currentRenameId = '';
    }
  },
  mounted () {
    this.transData();
  }
}
</script>

<style lang="less">
.tree-item{
  display: inline-block;
  width:  200px;
  height: 30px;
  line-height: 30px;
  & > .ivu-dropdown{
    float: right;
  }
  ul.ivu-dropdown-menu{
    padding-left: 0;
  }
  li.ivu-dropdown-item{
    margin:0;
    padding: 7px 16px;
  }
  & .input{
    width: ~"calc(100% - 80px)";
  }
}
</style>
