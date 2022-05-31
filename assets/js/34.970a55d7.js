(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{408:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ddtv-cli安装教程-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddtv-cli安装教程-windows"}},[t._v("#")]),t._v(" DDTV_CLI安装教程（Windows）")]),t._v(" "),a("h2",{attrs:{id:"_1-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[t._v("#")]),t._v(" 1.下载")]),t._v(" "),a("p",[t._v("从以下地方选一个下载DDTV最新版本"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/CHKZL/DDTV/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://hub.fastgit.xyz/CHKZL/DDTV/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub(fastgit镜像)"),a("OutboundLink")],1),a("br"),t._v("\nQQ群共享(其实我推荐这个(这里的人超好的，还能直接和我对线((("),a("br"),t._v("\nDDTV功能反馈讨论群:"),a("code",[t._v("338182356")]),a("br"),t._v("\nDDTV聊天吹水群:"),a("code",[t._v("307156949")])]),t._v(" "),a("h2",{attrs:{id:"_2-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[t._v("#")]),t._v(" 2.安装")]),t._v(" "),a("p",[t._v("DDTV_CLI是免安装的，把下载下来的压缩包解压到任意位置即可")]),t._v(" "),a("h2",{attrs:{id:"_3-启动准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动准备"}},[t._v("#")]),t._v(" 3.启动准备")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果在这个步骤中出现了你本地并不存在的文件，请尝试先启动一次DDTV_CLI，正常情况下会自动生成缺失的文件。当然也可以手动新建。")])]),t._v(" "),a("h3",{attrs:{id:"_1-运行环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行环境准备"}},[t._v("#")]),t._v(" (1)运行环境准备")]),t._v(" "),a("blockquote",[a("p",[t._v("DDTV_CLI依赖于"),a("code",[t._v(".NET Runtime 6.0")]),t._v("环境运行，请先安装"),a("code",[t._v(".NET Runtime 6.0")]),t._v("："),a("br"),t._v(" "),a("a",{attrs:{href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.1-windows-x64-installer",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载.NET Runtime(x64)"),a("OutboundLink")],1),a("br"),t._v("\n如果你的操作系统不是"),a("code",[t._v("64位Windows10")]),t._v("请到参考"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/windows?tabs=net60",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软文档"),a("OutboundLink")],1),t._v("进行环境的安装")])]),t._v(" "),a("h3",{attrs:{id:"配置房间文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置房间文件"}},[t._v("#")]),t._v(" 配置房间文件")]),t._v(" "),a("p",[t._v("默认房间文件"),a("code",[t._v("RoomListConfig.json")]),t._v("格式为json字符串，默认为空json，并且和DDTV_GUI通用"),a("br"),t._v("\n在API中支持一键导入"),a("br"),t._v("\n可以直接使用DDTV的房间配置文件复制过来即可"),a("br"),t._v("\n在下载的压缩包里附带了一个参考的文件，也可以参考那个文件进行手动编写"),a("br"),t._v("\n房间配置文件格式为")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"未来明-MiraiAkari"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//昵称")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//备注")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"RoomId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6792401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//房间号")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"UID"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("238537745")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//账号UID")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IsAutoRec"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开播后是否自动录制")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IsRemind"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开播后是否提醒(DDTV_GUI特有，在本版本中无效)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IsRecDanmu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否录制该房间弹幕(需要打开总弹幕录制开关)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Like"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///特别标注(本版本无效)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("多个这种格式的内容组成")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("手动编辑过后请检查JSON字符串的合法性，请保证确保符合参考文件的JSON文件格式！！！")])]),t._v(" "),a("h2",{attrs:{id:"_4-启动-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动-初始化"}},[t._v("#")]),t._v(" 4.启动&初始化")]),t._v(" "),a("p",[t._v("在Windows下直接打开DDTV_CLI.exe即可"),a("br"),t._v("\n然后根据控制台窗口显示的内容操作即可")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("在Windows下cmd\\PowerShell都有一个默认勾选的选项"),a("code",[t._v("快速编辑模式")]),t._v("，程序在运行中点击控制台窗口会导致程序冻结！停止运行！请关闭该选项或注意不要点击控制台窗口")])]),t._v(" "),a("h2",{attrs:{id:"其他功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他功能"}},[t._v("#")]),t._v(" 其他功能")]),t._v(" "),a("p",[t._v("其他高级功能请参考"),a("code",[t._v("配置说明")]),t._v("页面的内容进行相应功能的配置即可，如有任何疑问都可以加群338182356进行对线")])])}),[],!1,null,null,null);s.default=r.exports}}]);