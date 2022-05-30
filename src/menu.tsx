import CalculateIcon from '@mui/icons-material/Calculate'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import HttpsIcon from '@mui/icons-material/Https'
import ImageIcon from '@mui/icons-material/Image'

import Encoder from './app/Encoder'
import Encrypt from './app/Encrypt'
import ProgrammerCalculator from './app/ProgrammerCalculator'
import StringHash from './app/StringHash'

export interface MenuItem {
  label: string
  description?: string
  icon?: any
  path?: string
  view?: any
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
        view: <ProgrammerCalculator />,
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
        label: '各种编码',
        path: '/code/encoder',
        view: <Encoder />,
        description: 'Base64 / URL / Unicode 互转'
      },
      {
        label: '各种加密',
        path: '/code/encrypt',
        view: <Encrypt />,
        description: 'AES / DES / RC4'
      },
      {
        label: '字符串哈希',
        path: '/code/str-hash',
        view: <StringHash />,
        description: 'MD5 / SHA1 / SHA256 / SHA512'
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
