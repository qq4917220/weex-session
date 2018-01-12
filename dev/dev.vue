<template>
  <div>
    <div>------------------------</div>
    <div>{{info}}</div>
    <div>1.yarn dev or npm run dev</div>
    <div>2.open the dev.html in the browser</div>
    <div>have fun!!!</div>
    <div>------------------------</div>
    <div></div>
    <div></div>
    <div>-----------run-------------</div>
    <!--session显示-->
    <div>
      <span v-html="content"></span>
    </div>
    <div>-----------END run-------------</div>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import session from "../src/session";

@Component({
  components: {}
})
export default class Index extends Vue {
  info = "Hello world!!";
  content = "";

  created() {
    session.set<string>("str", "string");
    session.set<number>("num", 100);
    this.content += "str:" + session.get("str") + "<br/>";
    this.content += "num:" + session.get("num") + "<br/>";
    this.content += "content:" + JSON.stringify(session.content()) + "<br/>";
    session.del("str");
    session.del("num");
    this.content +=
      "content is clear:" + JSON.stringify(session.content()) + "<br/>";
  }
}
</script>