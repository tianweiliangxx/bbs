<template>
    <div class="Bottom">
        <ul class="message">
            <li><ul class="bm">
                <li class="abstract one">关于我们</li>
                <li class="abstract one">联系我们</li>
                <li class="abstract one">招聘人才</li>
                <li class="abstract">友情链接</li>
            </ul></li>
            <li class="copyright">©️2020 毕业设计</li>
            <li class="phone">电话：1763584***</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style lang="stylus" scoped>
.Bottom
    background-color #000
    color #fff
    .message
        text-align center
        .bm
            overflow hidden
            text-align center
            margin-left 600px
            .abstract
                float left
                width:80px
                .one
                    border-right-style 1px solid #fff
</style>