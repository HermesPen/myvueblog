<template>
  <el-row class="sharelistBox">
    <div class="ui label">
      <a :href="'#/Share?classId=' + classId">{{ className }}</a>
    </div>
    <ul v-if="sonclassList" class="shareclassTwo">
      <li v-for="(citem, index) in sonclassList">
        <a
          :href="'#/Share?classId=' + classId + '&classtwoId=' + citem.class_id"
          :class="citem.class_id == classtwoId ? 'active' : ''"
          >{{ citem.cate_name }}</a
        >
      </li>
    </ul>
    <el-col
      :span="24"
      class="s-item tcommonBox"
      v-for="(item, index) in articleList"
      :key="'article' + index"
    >
      <span class="s-round-date">
        <span
          class="month"
          v-html="showInitDate(item.create_time, 'month') + '月'"
        ></span>
        <span
          class="day"
          v-html="showInitDate(item.create_time, 'date')"
        ></span>
      </span>
      <header>
        <h1>
          <a :href="'#/DetailShare?aid=' + item.id" target="_blank">
            {{ item.title }}
          </a>
        </h1>
        <h2>
          <i class="fa fa-fw fa-user"></i>发表于
          <i class="fa fa-fw fa-clock-o"></i
          ><span v-html="showInitDate(item.create_time, 'all')">{{
            showInitDate(item.create_time, "all")
          }}</span>
          <i class="fa fa-fw fa-eye"></i>{{ item.browse_count }} 次围观
        </h2>
        <div class="ui label">
          <a :href="'#/Share?classId=' + item.class_id">{{ item.cate_name }}</a>
        </div>
      </header>
      <div class="article-content">
        <p style="text-indent: 2em">
          {{ item.description }}
        </p>
        <p style="max-height: 300px; overflow: hidden; text-align: center">
          <img :src="item.image" alt="" class="maxW" />
        </p>
      </div>
      <div class="viewdetail">
        <a
          class="tcolors-bg"
          :href="'#/DetailShare?aid=' + item.id"
          target="_blank"
        >
          阅读全文>>
        </a>
      </div>
    </el-col>
    <el-col class="viewmore">
      <a
        v-show="hasMore"
        class="tcolors-bg"
        href="javascript:void(0);"
        @click="addMoreFun"
        >点击加载更多</a
      >
      <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);"
        >暂无更多数据</a
      >
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style scoped>
</style>