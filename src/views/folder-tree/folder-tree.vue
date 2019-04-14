<template>
  <div class="folder-wrapper">
    <!-- <Tree :data = folderTree :render="renderFunc"></Tree> -->
    <folder-tree 
      :folder-list.sync="folderList" 
      :file-list.sync="fileList" 
      :folderDrop="folderDrop" 
      :fileDrop="fileDrop"
      :beforeDelete="beforeDelete">
    </folder-tree>
  </div>
</template>

<script>
import { getFolderList, getFileList } from '@/api/folder-tree'
import FolderTree from '_c/folder-tree'
import { resolve, reject } from 'q';
export default {
  name: 'folder',
  components:{
    FolderTree
  },
  data () {
    return {
      folderList: [],
      fileList: [],
      folderDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除文件夹'
        }
      ],
      fileDrop: [
         {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除文件'
        }
      ]
    }
  },
  methods: {
    beforeDelete () {
      return new Promise((resolve, reject) => {
        let err = null;
        if (!err) {
          setTimeout(()=> {
            resolve();
          }, 2000)
        }else {
          setTimeout(()=> {
            reject();
          }, 2000)
        }
      })
    }
  },
  mounted () {
   Promise.all([getFolderList(), getFileList()]).then(res => {
     this.folderList = res[0];
     this.fileList = res[1];
   })
  }
}
</script>

<style lang="less">

</style>
