export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "小仙女",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ozvZX6_Sjc7TayEATg1kwxSJj9Kw",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "EgPlYflbWF6JmKOcgfyhP-nXEioBo2qQZdtp4-mxKSU",
      // 所在省份
      province: "广东",
      // 所在城市
      city: "广州",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '02-13',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
          {"type": "*生日", "name": "鱼", "year": "1991", "date": "12-07", isShowAge: false},
          {"type": "节日", "name": "结婚纪念日", "year": "2017", "date": "11-13"}
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2015-10-09"},
        // 结婚纪念日
        {"keyword": "marry_day", date: "2017-11-13"},
        // 认识的时间
        {"keyword": "know_day", date: "2009-09-01"},
      ]
    },
    {
      name: "鱼",
      id: "ozvZX6-ppMkJ0zkbZicWih0VUV4Q",
      //useTemplateId: "xhSEcXHAFti5Q2M2jzLWSa0p9QVV1p0wx4hl5kJDEXg",
      useTemplateId: "10xWlCPlSzw7Mp8ul4pkOyBIe2HD7n2seY2syw8RLx0",
      province: "广东",
      city: "广州",
      horoscopeDate: '01-11',
      horoscopeDateType: '今日',
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
          {"type": "*生日", "name": "老婆", "year": "1992", "date": "01-10", isShowAge: false},
          {"type": "节日", "name": "结婚纪念日", "year": "2017", "date": "11-13"}
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2015-10-09"},
        // 结婚纪念日
        {"keyword": "marry_day", date: "2017-11-13"},
        // 认识的时间
        {"keyword": "know_day", date: "2009-09-01"},
      ]
    },
    {
      // 想要发送的人的名字
      name: '俊豪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'ozvZX6yqTMeqWuxYXfNC_lZ0K5iQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: 'VZFB8FyswLtb8KplHJaNl3uuw-u6CUU9WWn5N0cBWx4',
      // 所在省份或城市，也可以不填
      province: '广东',
      // 所在城市或县区
      city: '广州',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '09-21',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://wangxinleo.cn',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '我的', year: '1996', date: '09-21',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2021', date: '08-28',
        }
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-03-04' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-08-28' }
      ]
    }
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "OwTrAh5EMzwr7KYfyw7jPxJbjEzH1yRoFhtqBO8eElU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ozvZX6-ppMkJ0zkbZicWih0VUV4Q",
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "广东",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "惠州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "老婆", "year": "1992", "date": "01-10", isShowAge: false},
    {"type": "节日", "name": "结婚纪念日", "year": "2017", "date": "11-13"},
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    // {"type": "生日", "name": "鱼", "year": "1991", "date": "12-07", isShowAge: false},
    {"type": "*生日", "name": "鱼", "year": "1991", "date": "12-07", isShowAge: false},
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2015-10-05"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2017-11-13"},
    // 认识的时间
    {"keyword": "know_day", date: "2009-09-01"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "又是元气满满的一天~"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "仙女应该是，怎么吃都不胖吧~",
      "萌萌的专属股市大涨~",
      "享受爱萌萌的每一天!",
      "借小仙女的云，搬更多的砖~",
      "一起度过开心美好的一天~",
      "今天简单摸下鱼！",
      "萌萌又是困困的一天?是不是想回家睡觉~",
      "萌萌是小猪猪，爱吃饭睡觉~",
      "给鱼发一个红包吧，嘿嘿~",
      "让鱼发一个红包吧~",
      "瘦瘦哒~",
      "美美哒~",
      "不想上班，想回家~",
      "哇，小仙女啊~",
      "想有一辆车",
      "想开车兜风"
    ]},
    {"keyword": "lp_yu", contents: [
      "鱼鱼是墩墩，就几道吃吃吃",
      "带萌萌去兜风啦",
      "哇，哪来的小靓仔",
      "鱼鱼想要一个小红包~",
      "给萌发一个红包吧",
      "今天要乖哦",
      "今天又是爱萌萌的一天",
      "关机，一天工资到手",
      "下班啦下班啦",
      "今天不熬夜！"
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],


}
