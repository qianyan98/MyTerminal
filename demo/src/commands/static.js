export default {
  contact: {
    description: 'Return a list of my contact information.',
    list: [
      {
        type: 'info',
        label: 'Email:',
        content: '`3406128464a@gmail.com`'
      },
      {
        type: 'info',
        label: 'Github:',
        content: '`https://github.com/qianyan98`'
      },
      {
        type: 'info',
        label: 'instagram:',
        content: '`https://instagram.com/qianyan666`'
      },
      {
        type: 'info',
        label: 'Telegram:',
        content: '`https://t.me/yehan`'
      }
    ]
  },
  findme: {
    description: 'Return a piece of code about makiru.',
    list: [
      {
        type: 'success',
        label: 'Compiled',
        content: '1   String makiru = "瞳染";'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '2   String makiru_corner = "角落里的瞳染";'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '3   Random random = new Random();'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '4   try {'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '5     if (makiru_corner.substring(random.nextInt(6)).equals(makiru)) {'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '6          System.out.println("瞳染被你找到啦!");'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '7       } else {'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '8           throw new Exception();'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '9       }'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '10   } catch (Exception e) {'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '11      System.out.println("呜呜呜!");'
      },
      {
        type: 'success',
        label: 'Compiled',
        content: '12   }'
      }
    ]
  },
  skill: {
    description: 'Return a list of my skills and my rating of them.',
    list: [
      { type: 'success', label: 'A', content: '· Java 90/100' },
      { type: 'success', label: 'A', content: '· C 90/100' },
      { type: 'success', label: 'A', content: '· Python 90/100' },

      { type: 'warning', label: 'B', content: '· JavaScript 70/100' },
      { type: 'warning', label: 'B', content: '· HTML5 70/100' },
      { type: 'warning', label: 'B', content: '· C++ 70/100' },

      { type: 'error', label: 'C', content: '· C# 50/100' },
      { type: 'error', label: 'C', content: '· Go 50/100' },
      { type: 'error', label: 'C', content: '· Shell 50/100' },
    ]
  },
  cartoon: {
    description: 'Return a list of cartoons that I have watched.',
    list: [
      ' 《 擅长捉弄的高木同学 》',
      ' 《 堀与宫村 》',
      ' 《 小林家的龙女仆 》',
      ' 《 关于我变成史莱姆这档事 》',
      ' 《 一拳超人 》',
      ' 《 辉夜大小姐想让我告白 》',
      ' 《 埃罗芒阿老师 》',
      ' 《 灵笼 》',
      ' 《 鬼灭之刃 》',
      ' 《 一人之下 》',
      ' 《 龙珠 》 全系列哟～',
      ' 《 火影忍者 》',
      ' 《 海贼王 》',
      ' 《  干物妹！小埋 》',
      ' 《 这个勇者明明超强却过分慎重 》',
      ' 《 青春猪头少年不会梦到兔女郎学姐 》',
      ' 《 冰菓 》',
      ' 《 刀剑神域 》',
      ' 《 因为太怕痛就全点防御力了 》',
      ' 《 转生成蜘蛛又怎样！ 》',
      ' 《 四月是你的谎言 》',
      ' 《 总之就是非常可爱 》',
      ' 还有很多很多很多, 写不完～ '
    ]
  }
  // book: {
  //   description: 'Return a list of books that I have read.',
  //   list: [
  //     ' 《 JavaScript 高级程序设计 》--- Nicholas C.Zakas ',
  //     ' 《 JavaScript 标准参考教程 》--- 阮一峰 ',
  //     ' 《 ECMAScript 6 入门 》--- 阮一峰 ',
  //     ' 《 JavaScript DOM 高级程序编程艺术 》--- Jeremy Keith ',
  //     ' 《 锋利的 jQuery 》--- 单东林 ',
  //     ' 《 CSS 揭秘 》--- LEA VEROU ',
  //     ' 《 CSS 权威指南 》--- Eric A.Meyer ',
  //     ' 《 HTML5 高性能指南 》--- 布莱恩特/琼斯 ',
  //     ' 《 C# 本质论 》--- MarkMichaelis ',
  //     ' 《 C# 入门经典 2015 》--- karli ',
  //     ' 《 C# 多线程编程实战 》--- 阿格佛温 ',
  //     ' 《 C primer plus(第六版) 》--- Stephen Prata ',
  //     ' 《 算法导论 》--- Thomas H.Cormen... ',
  //     ' 《 算法竞赛入门经典(第一版) 》--- 刘汝佳 ',
  //     ' 《 算法竞赛入门经典(第二版) 》--- 刘汝佳 ',
  //     ' 《 Vim 实战技巧 》--- Drew Neil ',
  //     ' 《 你不知道的 JavaScript-下 》--- Kyle Simpson ',
  //     ' 《 Linux 命令行大全 》--- William E.shotts，Jr ',
  //     ' 《 写给大忙人看的 Java 核心技术 》--- CayS.Horstmann ',
  //     ' 《 Python Cookbook 》--- Alex Martelli... ',
  //     ' 《 暗时间 》--- 刘未鹏 ',
  //     '  《 Haskell 趣学指南 》--- 斯洛文尼亚 ',
  //     ' 《 数学之美（第二版） 》--- 吴军 ',
  //     ' 《 Linux Bash 编程与脚本应用实战 》--- 马玉军 郝军 ',
  //     ' 《 程序员的呐喊 》--- Steve Yegge ',
  //     ' 《 The way to go 》--- 无闻 ',
  //     ' 《 The Go Programming Language 》--- Brian W. Kernighan... ',
  //     ' 《 Java 编程思想 （第4版） 》--- Bruce Eckel ',
  //     ' 《 Kotlin 核心编程 》--- 水滴团队 ',
  //     ' 《 Easy Kotlin 》--- JackChan ',
  //     ' 《 HTTP 图解 》--- 上野宣 ',
  //     '《 刘大猫的财富之旅 》--- 刘欣 ',
  //     '《 ZOO 》--- 乙一 '
  //   ]
  // }
}
