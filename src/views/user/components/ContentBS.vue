<template>
    <div class="BScroll-main">
        <div class="wrapper" ref="wrapper">
            <ul class="content"></ul>
        </div>
    </div>
    </div>
</template> 

<script>
import BScroll from '@better-scroll/core';

export default {
    name: 'BScroll',
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$scroll = new BScroll(this.$refs.wrapper, {
                click: true
            });
        });
    }
}
</script>

<style lang='scss' scoped>
.BScroll-main {
    .wrapper {
        height: calc(100% - 80px);
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    }
}
</style>