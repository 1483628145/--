// 引入mockJS
import mockjs from "mockjs";

// 引入json数据
// 注意 json是默认对外暴露的
import banner from "./bannr.json";
import floor from "./floor.json";

// mock数据 俩个参数 一个是code 一个是数据
mockjs.mock("/mock/banner", { code: 200, data: banner });
mockjs.mock("/mock/floor", { code: 200, data: floor });



