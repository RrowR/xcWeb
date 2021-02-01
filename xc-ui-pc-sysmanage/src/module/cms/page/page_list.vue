<template>
  <!--静态页面的编写,即view部分-->
  <div>
    <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名:<el-input v-model="params.pageAliase" style="width: 100px"></el-input>
        <el-button type="success" plain  v-on:click="query">查询</el-button>

      <!--在这个router-link的:to方法中，可以在{}中再通过一个逗号来写query方法，当点击这个按钮的时候，这个query方法就会将这个值赋给page和siteId，那么路由到的这个页面就可以得到这2个参数了-->
      <router-link :to="{path:'/cms/page/add',query:{
        page:this.params.page,
        siteId:this.params.siteId
      }}" >
        <el-button type="primary" size="small">新增页面</el-button>
      </router-link>

    </el-form>

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
      <el-table-column prop="pageCreateTime" label="创建时间" width="">
      </el-table-column>

      <el-table-column label="操作" width="80">
        <template slot-scope="page">
          <el-button size="small" type="text" @click="edit(page.row.pageId)">编辑</el-button>
          <el-button size="small" type="text" @click="del(page.row.pageId)">删除</el-button>
        </template>
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
        cmsApi.page_list(this.params.page,this.params.size,this.params).then((res)=>{
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        });
      },
      pageChange:function (page) {
        // alert(page);
        //调用query方法
        this.params.page = page;
        this.query()
      },
      edit:function (pageId) {
        this.$router.push("/cms/page/edit/"+pageId);
      },
      del:function (pageId) {
        this.$confirm('确认删除吗？', '提示', {}).then(() => {
          cmsApi.page_del(pageId).then(res=>{
            if(res.success){
              this.$message.success("删除成功");
              this.query();
            }else{
              this.$message.error("删除失败");
            }
          })
        })
      }
    },
    data() {
      return {
        siteList:[],  //站点列表,这是一个json数据，一定要注意下面的钩子函数起步是用的[]而不是{}
        total:50,
        params:{
          page:1,
          size:5,
          pageAliase:"",
          siteId:"",
        },
        list: [],
      }
    },
    created() {
      this.params.page = Number.parseInt(this.$route.query.page || 1);      //注意这里的page是从route里面取的，而不是我直接写的page，会取不到的,然后注意这里的page是整形，route里是字符串型
      this.params.siteId = this.$route.query.siteId || "";                               //siteId本身就是一个字符串
      this.query()
    },
    mounted() {
      //钩子方法，在页面渲染完成之后调用一次方法
      this.query();
      this.siteList =
      [
        {
        siteId: "5a751fab6abb5044e0d19ea1",
        siteName: "门户主站",
        },
        {
          siteId: "first",
          siteName: "first",
        },
      ]
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
