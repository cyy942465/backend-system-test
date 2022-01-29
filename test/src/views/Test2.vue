<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-top: 20px"
      border
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        align="center"
        prop="index"
        label=""
        width="50">
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        label="统计时间"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="diagnosed"
        label="累计确诊"
        sortable
        width="200px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="death"
        label="累计死亡"
        sortable
        width="200px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="cure"
        label="累计治愈"
        sortable
        width="200px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="add"
        label="当日新增"
        sortable
        width="200px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "test2",
  data() {
    return {
      tableData: [{
        index: '1',
        date: '2022-01-06',
        diagnosed: '133304',
        death: '5699',
        cure: '121354',
        add: '6251'
      }, {
        index: '2',
        date: '2022-01-05',
        diagnosed: '133063',
        death: '5699',
        cure: '121252',
        add: '6112'
      }, {
        index: '3',
        date: '2022-01-04',
        diagnosed: '132830',
        death: '5699',
        cure: '121052',
        add: '6079',
      }, {
        index: '4',
        date: '2022-01-03',
        diagnosed: '132692',
        death: '5699',
        cure: '120987',
        add: '6006',
      }, {
        index: '5',
        date: '2022-01-02',
        diagnosed: '132486',
        death: '5699',
        cure: '120936',
        add: '5844',
      }, {
        index: '6',
        date: '2022-01-01',
        diagnosed: '132301',
        death: '5699',
        cure: '120884',
        add: '5718',
      }]
    }
  }
}
</script>

<style>

</style>