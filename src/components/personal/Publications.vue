<template>
    <div class="Publications">
        <div class="title">
            标题：&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="title" placeholder="请输入内容" style="width:50%;margin-left:30px"></el-input><br>
            文章概括：
            <el-input v-model="digest" placeholder="请输入内容" style="width:50%"></el-input><br>
            选择板块
            <el-select v-model="category_id" placeholder="请选择" style="margin-left:17px">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <form  id="myForm" action="">
                选择插图：
                <el-input id="imgFiles" v-model="index_image" @change="getFile($event)" type="file" placeholder="请输入内容" style="width:50%"></el-input>
            </form>
        </div>
        <div class="content">
            <quill-editor
                    v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)"
                    class="quill">
            </quill-editor>
        </div>
        <div class="btn">
            <el-button type="primary" @click="issue">发表文章</el-button>
        </div>
    </div>
</template>

<script>
    import {
        newsRelease,
        getClassify
    } from '../../api/index'
    import { quillEditor } from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    export default {
        name: "Publications",
        data() {
            return {
                title:'',
                content: `欢迎使用`,
                digest:'',
                category_id:'',
                index_image: '',
                editorOption: {},
                options:[]
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorReady(editor) { // 准备编辑器

            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件
            issue () {
                var file = document.getElementById("imgFiles").files[0]; //获取文件
                console.log(document.getElementById("imgFiles").files)
                newsRelease(localStorage.userId, this.title, this.digest, this.content, this.category_id, file).then(res => {
                    alert(res.data.errmsg)
                    console.log(res);
                })
            },
            getFile(event) {
                console.log(event);
            },
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },
        mounted() {
            getClassify(localStorage.userId).then(res => {
                console.log(res);
                let categories = res.data.data.categories
                for (let i = 0; i < categories.length; i++) {
                    const argument = categories[i];
                    this.options.push({value:argument.id,label:argument.name})
                }
            })
        }
    }
</script>

<style lang="stylus" scoped>
.Publications
    width 100%
    height 520px
    background-color #fff
    .title
        margin 20px 0 0 20px
    .content
        width 80%
        margin 20px 0 0 20px
        .quill
            height:200px
    .btn
        margin-left 560px
        margin-top 84px
</style>