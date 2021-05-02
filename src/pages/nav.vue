<!--头部导航 -->
<template>
  <div>
    <div class="navs" data-aos="fade-down">
      <img
        src="../assets/img/boy.png"
        class="nav-image"
        @click="changeStyle('aboutme')"
      />
      <div
        class="nav"
        :class="{ changeStyle: changeSelectStyle == 'index' }"
        @click="changeStyle('index')"
      >
        Home
      </div>
      <div
        class="nav"
        :class="{ changeStyle: changeSelectStyle == 'code' }"
        @click="changeStyle('code')"
      >
        Code
      </div>
      <div
        class="nav"
        :class="{ changeStyle: changeSelectStyle == 'life' }"
        @click="changeStyle('life')"
      >
        Life
      </div>
      <div
        class="nav"
        :class="{ changeStyle: changeSelectStyle == 'author' }"
        @click="changeStyle('author')"
      >
        Author
      </div>
      <div class="nav-search">
        <i
          ><img
            class="el-icon-message"
            src="../assets/img/message.png"
            @click="changeStyle('message')"
        /></i>
      </div>
      <!-- save github  -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      changeSelectStyle:'index'
    };
  },
  components: {},
  methods: {
    changeStyle(val) {
      this.changeSelectStyle = val;
      this.$router.push("/" + val);
    },
  },
};
</script>
<style lang="less" scoped>
// @media screen and (max-width: 3000px) and (min-width: 767px) {
/* GitHub Cornor */
.github-corner :hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
.github-corner > svg {
  fill: rgb(0, 0, 0) !important;
  color: rgb(255, 255, 255) !important;
}
.github-corner .github-corner:hover .octo-arm {
  animation: none;
}
.github-corner .github-corner .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
// }
@-moz-keyframes octocat-wave {
  0%,
  100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%,
  60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%,
  80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@-webkit-keyframes octocat-wave {
  0%,
  100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%,
  60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%,
  80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@-o-keyframes octocat-wave {
  0%,
  100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%,
  60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%,
  80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@keyframes octocat-wave {
  0%,
  100% {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  20%,
  60% {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%,
  80% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}

/*
  屏幕小于768px的
  */
@media screen and (max-width: 768px) and (min-width: 100px) {
  .navs {
    width: 100%;
    height: 80px;
    /* line-height: 80px; */
    background: rgb(254, 254, 254);

    .nav {
      display: none;
    }
    .changeStyle {
      font-weight: bold;
    }
    .nav-image {
      float: left;
      display: inline;
      margin-top: 10px;
      margin-left: 30px;
    }

    .nav-search {
      width: 32px;
      float: left;
      margin-left: 28%;
      margin-top: 23px;
    }
    .el-icon-message {
      margin-left: 70px;
      cursor: pointer;
    }
    .github-corner {
      display: none;
    }
  }
  .show-card {
    width: 100%;
    background-image: url(../assets/img/tags.jpeg);
    z-index: 100;
    position: absolute;
    margin-top: 100px;
    height: 450px;
    border-top: 0.5px solid rgb(214, 212, 212);
    .card-recent {
      display: none;
      margin-top: 20px;
      margin-right: 65%;
    }
    .small-card {
      display: none;
      width: 100%;
      margin: 0 auto;
      .el-col {
        float: left;
        margin-left: 20px;
        width: 100px;
        height: 100px;
        .nav-show-image {
          width: 100%;
          height: 140px;
          object-fit: cover;
          transition: all 0.6s;
        }
        .nav-show-image:hover {
          transform: scale(1.2);
        }
        .card-massges {
          object-fit: cover;
          height: 20px;
          font-size: 15px;
        }
      }
    }
    .nav-tags {
      float: left;
      margin-top: 30px;
      margin-left: 80px;
      color: rgb(228, 236, 218);
      font-size: 150%;
    }
    .tags-div {
      float: right;
      margin-right: 40%;
      margin-top: 80px;
      .tags {
        margin-top: 15px;
        font-size: 20px;
        color: rgb(226, 238, 225);
      }
    }
  }
}

@media screen and (max-width: 3000px) and (min-width: 767px) {
  .navs {
    width: 100%;
    height: 80px;
    /* line-height: 80px; */
    .nav {
      float: left;
      margin-left: 40px;
      font-size: 18px;
      cursor: pointer;
      margin-top: 30px;
    }
    .nav:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }
      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
    .changeStyle {
      font-weight: bold !important;
    }
    .nav-image {
      float: left;
      display: inline;
      margin-top: 10px;
      margin-left: 17%;
    }

    .nav-search {
      float: left;
      margin-left: 15px;
      margin-top: 23px;
      cursor: pointer;
    }
    .el-icon-message {
      margin-left: 400px;
      cursor: pointer;
    }
  }
  .show-card {
    width: 100%;
    height: 400px;
    background: rgb(255, 255, 255);
    z-index: 100;
    position: absolute;
    margin-top: 100px;
    border-top: 0.5px solid rgb(214, 212, 212);
    .card-recent {
      margin-top: 20px;
      margin-right: 65%;
    }
    .small-card {
      width: 75%;
      margin: 0 auto;
      .card-blog {
        margin-left: 20px;
        width: 200px;
        height: 200px;
        .nav-show-image {
          width: 100%;
          height: 140px;
          object-fit: cover;
          transition: all 0.6s;
        }
        .nav-show-image:hover {
          transform: scale(1.2);
        }
        .card-massges {
          object-fit: cover;
          height: 20px;
          font-size: 15px;
        }
      }
    }
    .nav-tags {
      margin-top: 30px;
      margin-right: 72%;
    }
    .tags-div {
      margin-left: 200px;
    }
    .tags {
      float: left;
      margin-left: 3%;
      font-size: 18px;
      cursor: pointer;
      margin-top: 10px;
      font-weight: bold;
    }
  }
}
</style>