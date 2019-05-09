> jQuery的$.ajax方法响应数据类型有哪几种？本质上原生ajax响应数据格式有哪几种，分别对应哪个属性？

- jQuery的$.ajax方法响应数据类型有：xml、html、script、json、jsonp、text

- 本质上原生ajax响应数据格式只有2种：xml和text，分别对应xhr.responseText和xhr.responseXML

ajax状态码
- 0 ：请求未初始化
- 1 ：服务器连接已建立
- 2 ：请求已接受
- 3 ：请求处理中
- 4 ：请求已完成，响应已就绪