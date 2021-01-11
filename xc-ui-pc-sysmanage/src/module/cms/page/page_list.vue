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
      pageChange:function () {
        this.query()
      }
    },
    data() {
      return {
        total:50,
        params:{
          page:2,
          size:3,
        },
        list: [
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5a754adf6abb500ad05688d9",
            "pageName": "index.html",
            "pageAliase": "首页",
            "pageWebPath": "/index.html",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\",
            "pageType": "0",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-02-03T05:37:53.256+0000",
            "templateId": "5a962b52b00ffc514038faf7",
            "pageParams": null,
            "htmlFileId": "5a7c1c54d019f14d90a1fb23",
            "dataUrl": null
          },
        ]
      }
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
