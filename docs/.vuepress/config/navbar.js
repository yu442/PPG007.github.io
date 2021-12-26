const Navbar = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '前端',
    children: [
      {
        text: 'HTML',
        link: '/html',
      },
      {
        text: 'CSS',
        link: '/css',
      },
      {
        text: 'JavaScript',
        link: '/javascript',
      },
      {
        text: 'ES6',
        link: '/es6',
      },
      {
        text: 'Vue 2.X',
        link: '/vue2',
      },
      {
        text: 'Vue 3',
        link: '/vue3',
      },
      {
        text: 'Axios',
        link: '/axios',
      },
    ],
  },
  {
    text: 'Java',
    children: [
      {
        text: 'Java IO',
        link: '/JavaIO.html',
      },
      {
        text: 'Java 知识点',
        link: '/Java知识点.html',
      },
      {
        text: 'Java 网络通信',
        link: '/Java网络通信.html',
      },
      {
        text: 'ActiveMQ',
        link: '/ActiveMQ.html',
      },
      {
        text: 'Mybatis',
        link: '/Mybatis.html',
      },
      {
        text: 'Spring',
        link: '/Spring.html',
      },
      {
        text: 'SpringMVC',
        link: '/SpringMVC.html',
      },
      {
        text: 'SpringBoot',
        link: '/SpringBoot.html',
      },
      {
        text: 'SpringCloud',
        link: '/SpringCloud.html',
      },
      {
        text: 'Dubbo',
        link: '/Dubbo.html',
      },
      {
        text: 'Docker',
        link: '/Docker.html',
      },
    ],
  },
  {
    text: 'Go',
    children: [
      {
        text: 'Go',
        link: '/go',
      },
      {
        text: 'gRPC&Protobuf',
        link: '/grpc-and-protobuf',
      },
      {
        text: 'Gin',
        link: '/gin',
      },
    ],
  },
  {
    text: '数据库',
    children: [
      {
        text: 'MongoDB',
        link: '/mongodb',
      }
    ],
  },
  {
    text: 'Git',
    children: [
      {
        text: 'Git',
        link: '/git',
      }
    ],
  },
  {
    text: 'Be Professional',
    children: [
      {
        text: 'Coding Style',
        link: '/CodingStyle.html',
      }
    ],
  },
  {
    text: 'others',
    children: [
      {
        text: 'Markdown',
        link: '/Markdown.html',
      }
    ],
  },
]

module.exports.Navbar = Navbar
