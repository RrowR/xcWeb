<template>
  <!--静态页面的编写,即view部分-->
  <div>
    <el-button type="success" plain  v-on:click="query" style="float: right">成功按钮</el-button>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="total"
      :page-size="params.size"
      :current-page="params.page"
      style="float: right"
      @current-change="pageChange">
    </el-pagination>
  </div>
</template>
<script>
  /*编写页面静态部分，即model及vm部分。*/
  import * as cmsApi from "../api/cms"
  export default {
    methods:{
      //查询
      query:function () {
        // alert("查询")
        cmsApi.page_list(this.params.page,this.params.size).then((res)=>{
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        });
      },
      pageChange:function (page) {
        // alert(page);
        //调用query方法
        this.params.page = page;
        this.query()
      }
    },
    data() {
      return {
        total:50,
        params:{
          page:1,
          size:10,
        },
        list: [],
      }
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
