1.下载完之后，双击打开：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530134931782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)
2.点击next开始安装
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530135236945.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)
3.选择"接受按钮"，进行下一步
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019053013533936.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)
4.选择安装路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530135424884.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)
5.安装你需要的模式
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530135524559.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)
6.开始安装install
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530135557224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)
7.完成finish
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530135634244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)

##### 安装完之后打开终端 window+R

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530135917352.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)

##### cmd 回车；输入命令：“node -v” 查看版本号

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530140110902.png)

##### 出现版本号，说明你的电脑上已经有nodejs，安装成功！

### 配置环境

NodeJS和NPM安装好了以后并不能直接使用，默认情况下，NPM安装的模块并不会安装到NodeJS的程序目录，比如我们安装的时候设置的D盘，“D:\Program Files\nodejs”，而我们使用npm安装一个cluster模块他会出现在C盘默认的路径下面，所以，如果我们不修改npm的模块安装目录，那么它默认情况下都会安装到这里，随着你测试开发各种不同的项目，安装的模块越来越多，这个文件夹的体积就会越来越大，直到占满你的C盘。所以我们要修改npm的配置。

###### 1.在nodejs文件夹下，创建两个为文件夹： node_global;node_cecal

这是用来放安装过程的缓存文件以及最终的模块配置位置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530155912242.png)

###### 2.使用下面命令将npm的全局模块目录和缓存目录配置到我们刚才创建的那两个目录

**npm config set prefix "node_global文件的路径"**
**npm config set cache "node_cache的文件路径"**
例如：npm config set prefix “D:\Program Files\nodejs\node_global”

###### 3.高级系统设置——环境变量

新增系统变量：
变量名填：NODE_PATH
变量值填：（文件路径）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530161206918.png)
还需要在Path变量名中修改nodejs文件默认路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190530162032155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMjg1MzM1,size_16,color_FFFFFF,t_70)