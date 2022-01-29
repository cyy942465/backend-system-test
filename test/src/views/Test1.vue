<template>
  <div>
    <div class="search">
      <p style="font-size: 14px">信息查询</p>
      <el-input v-model="search" placeholder="请输入用户账号" size="mini" style="width: 200px;margin-top: 10px"></el-input>
    </div>
    <el-table
      :data="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width: 100%"
      class="table">
      <el-table-column align="center"
        prop="index"
        label=" "
        width="50">
      </el-table-column>
      <el-table-column align="center"
        prop="account"
        label="用户账号"
        width="120">
      </el-table-column>
      <el-table-column align="center"
        prop="name"
        label="用户姓名"
        width="120">
      </el-table-column>
      <el-table-column align="center"
        prop="sex"
        label="用户性别"
        width="120">
      </el-table-column>
      <el-table-column align="center"
        prop="age"
        label="用户年龄"
        width="120">
      </el-table-column>
      <el-table-column align="center"
        prop="phone"
        label="联系电话"
        width="150">
      </el-table-column>
      <el-table-column align="center"
        prop="type"
        label="用户类型"
        width="150">
      </el-table-column>
      <el-table-column align="center"
        label="操作处理"
        width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "test1",
  data() {
    return {
      tableData: [{
        index: '1',
        account: 'admin',
        name: '张三',
        sex: '男',
        age: '18',
        phone: '902192019',
        type: '系统管理员'
      }, {
        index: '2',
        account: 'yicol',
        name: '陈彦宇',
        sex: '男',
        age: '18',
        phone: '15913908565',
        type: '社区工作者'
      }, {
        index: '3',
        account: 'yyds',
        name: '霍旭洋',
        sex: '男',
        age: '18',
        phone: '2712544110',
        type: '社区工作者'
      }],
      search: ''
    }
  },
  methods: {
    deleteRow(index,rows) {
      rows.splice(index,1);
    }
  }
}
</script>

<style scoped>
  .table {
    margin-top: 20px;
  }
  .search {
    margin: 10px 0;
  }
</style>