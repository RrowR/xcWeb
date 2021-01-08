<template>
  <!--静态页面的编写,即view部分-->
  <div>
    <el-button type="success" plain size="small">查询</el-button>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="页面别名" width="180">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="180">
      </el-table-column>


    </el-table>
  </div>
</template>
<script>
  /*编写页面静态部分，即model及vm部分。*/
  export default {
    data() {
      return {
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
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5a795ac7dd573c04508f3a56",
            "pageName": "index_banner.html",
            "pageAliase": "轮播图",
            "pageWebPath": "/include/index_banner.html",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\include\\",
            "pageType": "0",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-02-06T07:34:21.255+0000",
            "templateId": "5a962bf8b00ffc514038fafa",
            "pageParams": null,
            "htmlFileId": "5a795bbcdd573c04508f3a59",
            "dataUrl": null
          },
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5a7be667d019f14d90a1fb1c",
            "pageName": "index_category.html",
            "pageAliase": "分类导航",
            "pageWebPath": "/include/index_category.html",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\include\\",
            "pageType": "0",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-02-08T05:55:07.590+0000",
            "templateId": "5a962c16b00ffc514038fafd",
            "pageParams": null,
            "htmlFileId": "5a7be8e4d019f14d90a1fb21",
            "dataUrl": null
          },
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5a92141cb00ffc5a448ff1a0",
            "pageName": "10101.html",
            "pageAliase": "课程详情页面",
            "pageWebPath": "/course/",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\course\\detail\\",
            "pageType": "1",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-02-25T01:37:25.974+0000",
            "templateId": "5a925be7b00ffc4b3c1578b5",
            "pageParams": [
              {
                "pageParamName": "courseid",
                "pageParamValue": "4028e581617f945f01617f9dabc40000"
              }
            ],
            "htmlFileId": "5a94d6c6b00ffc3ab4bfa4f4",
            "dataUrl": null
          },
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5a94d79cb00ffc3ab4bfa4f6",
            "pageName": "4028e581617f945f01617f9dabc40000.html",
            "pageAliase": "课程详情页面",
            "pageWebPath": "/course/",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\course\\detail\\",
            "pageType": "1",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-02-27T03:59:21.353+0000",
            "templateId": "5a925be7b00ffc4b3c1578b5",
            "pageParams": [
              {
                "pageParamName": "courseid",
                "pageParamValue": "4028e581617f945f01617f9dabc40000"
              }
            ],
            "htmlFileId": "5aed94530e66185b64804c12",
            "dataUrl": null
          }
        ]
      }
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
