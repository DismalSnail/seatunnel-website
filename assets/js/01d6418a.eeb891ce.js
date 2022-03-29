"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[995],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Hbase",p={unversionedId:"connector/sink/Hbase",id:"connector/sink/Hbase",title:"Hbase",description:"Description",source:"@site/docs/connector/sink/Hbase.md",sourceDirName:"connector/sink",slug:"/connector/sink/Hbase",permalink:"/docs/connector/sink/Hbase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/Hbase.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"File",permalink:"/docs/connector/sink/File"},next:{title:"Hive",permalink:"/docs/connector/sink/Hive"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hbase.zookeeper.quorum string",id:"hbasezookeeperquorum-string",level:3},{value:"catalog string",id:"catalog-string",level:3},{value:"staging_dir string",id:"staging_dir-string",level:3},{value:"save_mode string",id:"save_mode-string",level:3},{value:"hbase.* string",id:"hbase-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hbase"},"Hbase"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hbase-connectors/tree/master/spark"},"hbase-connectors")," to output data to ",(0,i.kt)("inlineCode",{parentName:"p"},"Hbase")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"Hbase (>=2.1.0)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark (>=2.0.0)")," version compatibility depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase-connectors")," . The ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase-connectors")," in the official Apache Hbase documentation is also one of the ",(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#repos"},"Apache Hbase Repos"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,i.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Hbase"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hbase.zookeeper.quorum"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"staging_dir"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"save_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"append")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hbase.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"hbasezookeeperquorum-string"},"hbase.zookeeper.quorum ","[string]"),(0,i.kt)("p",null,"The address of the ",(0,i.kt)("inlineCode",{parentName:"p"},"zookeeper")," cluster, the format is: ",(0,i.kt)("inlineCode",{parentName:"p"},"host01:2181,host02:2181,host03:2181")),(0,i.kt)("h3",{id:"catalog-string"},"catalog ","[string]"),(0,i.kt)("p",null,"The structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase")," table is defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog")," , the name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase")," table and its ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," , which ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," are used as ",(0,i.kt)("inlineCode",{parentName:"p"},"rowkey"),", and the correspondence between ",(0,i.kt)("inlineCode",{parentName:"p"},"column family")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," can be defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog")," ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase table catalog")),(0,i.kt)("h3",{id:"staging_dir-string"},"staging_dir ","[string]"),(0,i.kt)("p",null,"A path on ",(0,i.kt)("inlineCode",{parentName:"p"},"HDFS")," that will generate data that needs to be loaded into ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase")," . After the data is loaded, the data file will be deleted and the directory is still there."),(0,i.kt)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,i.kt)("p",null,"Two write modes are supported, ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"append")," . ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite")," means that if there is data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase table")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"truncate")," will be performed and then the data will be loaded."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"append")," means that the original data of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase table")," will not be cleared, and the load operation will be performed directly."),(0,i.kt)("h3",{id:"hbase-string"},"hbase.* ","[string]"),(0,i.kt)("p",null,"Users can also specify multiple optional parameters. For a detailed list of parameters, see ",(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#config.files"},"Hbase Supported Parameters"),"."),(0,i.kt)("p",null,"If these non-essential parameters are not specified, they will use the default values given in the official documentation."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector/sink/common-options"},"Sink Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' hbase {\n    source_table_name = "hive_dataset"\n    hbase.zookeeper.quorum = "host01:2181,host02:2181,host03:2181"\n    catalog = "{\\"table\\":{\\"namespace\\":\\"default\\", \\"name\\":\\"customer\\"},\\"rowkey\\":\\"c_custkey\\",\\"columns\\":{\\"c_custkey\\":{\\"cf\\":\\"rowkey\\", \\"col\\":\\"c_custkey\\", \\"type\\":\\"bigint\\"},\\"c_name\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_name\\", \\"type\\":\\"string\\"},\\"c_address\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_address\\", \\"type\\":\\"string\\"},\\"c_city\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_city\\", \\"type\\":\\"string\\"},\\"c_nation\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_nation\\", \\"type\\":\\"string\\"},\\"c_region\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_region\\", \\"type\\":\\"string\\"},\\"c_phone\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_phone\\", \\"type\\":\\"string\\"},\\"c_mktsegment\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_mktsegment\\", \\"type\\":\\"string\\"}}}"\n    staging_dir = "/tmp/hbase-staging/"\n    save_mode = "overwrite"\n}\n')),(0,i.kt)("p",null,"This plugin of ",(0,i.kt)("inlineCode",{parentName:"p"},"Hbase")," does not provide users with the function of creating tables, because the pre-partitioning method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase")," table will be related to business logic, so when running the plugin, the user needs to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"hbase")," table and its pre-partition in advance; for ",(0,i.kt)("inlineCode",{parentName:"p"},"rowkey")," Design, catalog itself supports multi-column combined ",(0,i.kt)("inlineCode",{parentName:"p"},'rowkey="col1:col2:col3"')," , but if there are other design requirements for ",(0,i.kt)("inlineCode",{parentName:"p"},"rowkey")," , such as ",(0,i.kt)("inlineCode",{parentName:"p"},"add salt")," , etc., it can be completely decoupled based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform plugin")," pair ",(0,i.kt)("inlineCode",{parentName:"p"},"rowkey")," is modified."))}u.isMDXComponent=!0}}]);