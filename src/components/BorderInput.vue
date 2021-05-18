<template>
  <div class="border-input" :class="{'no-border': noBorder, 'vertical-center': noInput, 'multi-line': $slots.default }">
    <el-row type="flex">
      <el-col :span="4" class="vertical-center">
        <slot name="icon" />
      </el-col>
      <el-col v-if="!noInput" :span="flexSpan">
        <ul>
          <li class="label-text"><slot name="label">{{ labelText }}</slot></li>
          <li>
            <slot name="input"/>
          </li>
        </ul>
      </el-col>
      <el-col v-else :span="flexSpan" class="vertical-center">
        <span class="no-input">{{ labelText }}</span>
      </el-col>
      <el-col :span="4" class="right-icon" v-if="$slots['right-icon']">
        <slot name="right-icon"/>
      </el-col>
    </el-row>
    <slot />
  </div>
</template>

<script>
export default {
  name: "BorderInput",
  props: {
    list: String,
    noBorder: Boolean,
    noInput: Boolean,
    labelText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  computed: {
    flexSpan: function() {
      if (this.$slots['right-icon']) {
        return 16
      } else return 20
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.border-input {
  min-height: 65px;
  width: 100%;
  background: #fff;
  padding: 3px 10px;
  margin: 10px 0px;
  border: 1px solid#D4D5D5;
  border-radius: 65px;
  color: #3E3A39;
  flex-direction: column;
  justify-content: center;
  > div {
    width: 100%
  }
  &.multi-line {
    border-radius: 32px;
    padding: 10px;
  }
}
.label-text {
  color: #8B766C;
  font-size: 14px;
}
.no-border {
  border: none;
  background: initial
}
.no-input {
  color: #8B766C;
  font-size: 18px;
}
.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  margin-bottom: 0px;
}
li {
  line-height: 30px;
}
</style>