<template>
  <!--静态页面的编写,即view部分-->
  <div>
    <el-form :model="pageForm" label-width="80px" :rules="pageFormRules" ref="pageForm">
      <el-form-item label="所属站点" prop="siteId">
        <el-select v-model="pageForm.siteId" placeholder="请选择站点">
          <el-option v-for="item in siteList" :key="item.siteId" :label="item.siteName"
                     :value="item.siteId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择模版" prop="templateId">
        <el-select v-model="pageForm.templateId" placeholder="请选择">
          <el-option
            v-for="item in templateList"
            :key="item.templateId"
            :label="item.templateName"
            :value="item.templateId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="页面名称" prop="pageName">
        <el-input v-model="pageForm.pageName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="别名" prop="pageAliase">
        <el-input v-model="pageForm.pageAliase" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="访问路径" prop="pageWebPath">
        <el-input v-model="pageForm.pageWebPath" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="物理路径" prop="pagePhysicalPath">
        <el-input v-model="pageForm.pagePhysicalPath" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="pageForm.pageType">
          <el-radio class="radio" label="0">静态</el-radio>
          <el-radio class="radio" label="1">动态</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker type="datetime" placeholder="创建时间" v-model="pageForm.pageCreateTime">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog‐footer">
      <el-button type="primary" @click="addSubmit">提交</el-button>
      <el-button type="primary" @click="go_back">返回</el-button>
    </div>
  </div>
</template>
<script>
  /*编写页面静态部分，即model及vm部分。*/
  import * as cmsApi from "../api/cms"

  export default {
    methods: {
      addSubmit: function () {
        this.$refs["pageForm"].validate((valid) => {
          if (valid) {
            this.$confirm('您确认提交吗?', '提示', {}).then(() => {
              //调用添加方法的接口
              cmsApi.page_add(this.pageForm).then(res=>{
                if(res.success){
                  this.$message.success("操作成功");
                  //清空表单
                  this.$refs['pageForm'].resetFields();
                }else{
                  this.$message.error("提交失败");
                }
              });
            })
          }
        });
      },
      //定义返回方法，当点击go_back方法时，获取路由的地址（在js文件里）,使用push方法定向到这个地址，当然是否使用{}其实是无所谓的，使用了的话可以写更多东西
      go_back: function () {
        this.$router.push({
          path: "/cms/page/list",
          query: {
            page: this.$route.query.page,    //这里的this.$route.query是固定写法，目的是为了获取到route里的值，后面的属性表明的是获取route里的哪一个属性
            siteId: this.$route.query.siteId,
          }
        });
      },
    },
    data() {
      return {
        siteList: [],  //站点列表,这是一个json数据，一定要注意下面的钩子函数起步是用的[]而不是{}
        //模板列表
        templateList: [],
        total: 50,
        pageForm: {
          siteId: "",
          templateId: "",
          pageName: "",
          pageAliase: "",
          pageWebPath: "",
          pageParameter: "",
          pagePhysicalPath: '',
          pageType: '',
          pageCreateTime: new Date(),
        },
        pageFormRules: {
          siteId: [
            {required: true, message: '请选择站点', trigger: 'blur'}
          ],
          templateId: [
            {required: true, message: '请选择模版', trigger: 'blur'}
          ],
          pageName: [
            {required: true, message: '请输入页面名称', trigger: 'blur'}
          ],
          pageWebPath: [
            {required: true, message: '请输入访问路径', trigger: 'blur'}
          ],
          pagePhysicalPath: [
            {required: true, message: '请输入物理路径', trigger: 'blur'}
          ]
        }
      }
    },
    created() {
      //钩子方法，在页面渲染完成之后调用一次方法
      // this.query();
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
      this.templateList = [
        {
          templateId: '5a962b52b00ffc514038faf7',
          templateName: '首页'
        },
        {
          templateId: '5a962bf8b00ffc514038fafa',
          templateName: '轮播图'
        }
      ]
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
