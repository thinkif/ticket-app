/**
 * Created by lzw on 14-8-19.
 */
//我申请的一个应用的appId,appKey，你可以替换成自己的，新建一条工单，便可以看到相应的表
exports.applicationId='vw82rjz8ows36zvcvsiuxhgdk98m9yv9mzxu7zbakh4hcfz8';
exports.applicationKey='qttuphql7f5jlb30peac8a3nmzp2h4aqx1rikoppzw32avgz';

//express用做加密token的salt，自己申请应用搭建时，可稍微更改字符串，可以更安全
exports.cookieParserSalt="klp4e8b4sdOK86";

//mailGun，一个邮箱服务提供商，当有新工单创建或有回复的时候用到
exports.mailGunKey='key-a9c4e43f0d81a1248b196d6a49fcbab5';//please use your mailGunKey

//请设置自己的slackUrl，有工单回复的时候通知此slack聊天工具
exports.slackUrl='';

//配置自己申请的子域名
exports.hostUrl='https://pmwissue.avosapps.com';

//邮件的发送者，平时管理员回复了你的工单的时候，你便会收到来自这个邮箱的email
exports.emailHost='postmaster@sandboxda609ad09b79496d8b6a30848d4f9f56.mailgun.org';

//注册后，是否需要通过邮件验证才可以使用工单系统
exports.needEmailVerify = true;
