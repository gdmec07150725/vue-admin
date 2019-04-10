<template>
  <div class="folder-wrapper">
    <Tree :data = folderTree :render="renderFunc"></Tree>
  </div>
</template>

<script>
import { getFolderList, getFileList } from '@/api/folder-tree'
import { putFileInFolder, transferFolderToTree } from '@/lib/util'
export default {
  name: 'folder',
  data () {
    return {
      folderTree: [],
      renderFunc: (h,{ root, node, data }) => {
        return (
          <div class="tree-item">
            { data.type === 'folder' ? <icon type="ios-folder" color="#2d8cf0" style="margin-right: 10px"/> : '' }
            { data.title }
          </div>
        ) 
      }
    }
  },
  mounted () {
   Promise.all([getFolderList(), getFileList()]).then(res => {
     this.folderTree = transferFolderToTree(putFileInFolder(res[0],res[1]))
   })
  }
}
</script>

<style lang="less">
.tree-item{
  display: inline-block;
  width:  ~"calc(100% - 50px)"
}
</style>
