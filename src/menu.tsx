import CalculateIcon from '@mui/icons-material/Calculate'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import HttpsIcon from '@mui/icons-material/Https'
import ImageIcon from '@mui/icons-material/Image'

interface MenuItem {
  label: string
  description?: string
  icon?: any
  path?: string
  children?: MenuItem[]
}

const menuList: MenuItem[] = [
  {
    label: '图片应用',
    icon: <ImageIcon />,
    children: [
      {
        label: '图片裁剪',
        path: '/image/crop',
        description: '图片裁剪'
      },
      {
        label: '查看图片EXIF',
        path: '/image/exif',
        description: '查看图片EXIF'
      },
      {
        label: '图片压缩',
        path: '/image/compress',
        description: '图片压缩'
      },
      {
        label: '图片base64互转',
        path: '/image/base64',
        description: '图片base64互转'
      }
    ]
  },
  {
    label: '计算应用',
    icon: <CalculateIcon />,
    children: [
      {
        label: '程序员计算器',
        path: '/calculate/programmer',
        description: '程序员计算器'
      },
      {
        label: '汇率换算',
        path: '/calculate/exchange',
        description: '汇率换算'
      },
      {
        label: '时间戳计算',
        path: '/calculate/timestamp',
        description: '时间戳计算'
      },
      {
        label: 'crontab生成',
        path: '/calculate/crontab',
        description: 'crontab生成'
      },
      {
        label: 'BMI计算',
        path: '/calculate/bmi',
        description: 'BMI计算'
      }
    ]
  },
  {
    label: '代码转换&压缩',
    icon: <CodeIcon />,
    children: [
      {
        label: '代码格式化',
        path: '/code/format',
        description: '代码格式化'
      },
      {
        label: '代码压缩',
        path: '/code/compress',
        description: '代码压缩'
      },
      {
        label: 'babel编译',
        path: '/code/babel',
        description: 'babel编译'
      }
    ]
  },
  {
    label: '各类编码&加密',
    icon: <HttpsIcon />,
    children: [
      {
        label: 'base64',
        path: '/code/base64',
        description: 'base64编码'
      },
      {
        label: 'base58',
        path: '/code/base58',
        description: 'base58解码'
      },
      {
        label: 'URL',
        path: '/code/url',
        description: 'URL编码'
      },
      {
        label: 'Unicode',
        path: '/code/unicode',
        description: 'Unicode编码'
      },
      {
        label: 'MD5',
        path: '/code/md5',
        description: 'MD5加密'
      },
      {
        label: 'SHA1',
        path: '/code/sha1',
        description: 'SHA1加密'
      },
      {
        label: 'SHA256',
        path: '/code/sha256',
        description: 'SHA256加密'
      },
      {
        label: 'SHA512',
        path: '/code/sha512',
        description: 'SHA512加密'
      },
      {
        label: 'RSA',
        path: '/code/rsa',
        description: 'RSA加密'
      },
      {
        label: 'AES',
        path: '/code/aes',
        description: 'AES加密'
      },
      {
        label: 'RC4',
        path: '/code/rc4',
        description: 'RC4加密'
      },
      {
        label: '字符串哈希',
        path: '/code/hash',
        description: '字符串哈希'
      },
      {
        label: '文件哈希',
        path: '/code/file-hash',
        description: '文件哈希'
      }
    ]
  },
  {
    label: '日常',
    icon: <CalendarTodayIcon />,
    children: [
      {
        label: '订阅转换',
        path: '/daily/subscribe',
        description: '订阅转换'
      },
      {
        label: '二维码生成',
        path: '/daily/qrcode',
        description: '二维码生成'
      }
    ]
  }
]

export default menuList
