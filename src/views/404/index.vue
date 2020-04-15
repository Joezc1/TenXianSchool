<template>
    <div class="main">
        <img src="../../assets/img/404.jpg"/>
        <el-button icon="el-icon-back" @click="backHome">返回首页</el-button>
    </div>
</template>

<script>
export default {
    name: '404',
    data(){
        return {
            
        }
    },
    methods:{
        backHome(){
            this.$router.push({
                name: 'cyl_list'
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.main{
    padding:0 20% 0 20%;
    width: 100%;
    box-sizing: border-box;
    img{
        width: 100%;
    }
}
</style>