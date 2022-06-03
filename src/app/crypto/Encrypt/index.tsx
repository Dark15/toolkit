import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import CryptoJS from 'crypto-js'
import { useState } from 'react'

function Encrypt() {
  const [input, setInput] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState('')
  const [type, setType] = useState('AES')

  const handleEncrypt = () => {
    switch (type) {
      case 'AES':
        setResult(CryptoJS.AES.encrypt(input, key).toString())
        break
      case 'DES':
        setResult(CryptoJS.DES.encrypt(input, key).toString())
        break
      case 'RC4':
        setResult(CryptoJS.RC4.encrypt(input, key).toString())
        break
      case 'TripleDES':
        setResult(CryptoJS.TripleDES.encrypt(input, key).toString())
        break
      default:
        break
    }
  }

  const handleDecrypt = () => {
    switch (type) {
      case 'AES':
        setResult(CryptoJS.AES.decrypt(input, key).toString(CryptoJS.enc.Utf8))
        break
      case 'DES':
        setResult(CryptoJS.DES.decrypt(input, key).toString(CryptoJS.enc.Utf8))
        break
      case 'RC4':
        setResult(CryptoJS.RC4.decrypt(input, key).toString(CryptoJS.enc.Utf8))
        break
      case 'TripleDES':
        setResult(CryptoJS.TripleDES.decrypt(input, key).toString(CryptoJS.enc.Utf8))
        break
      default:
        break
    }
  }

  return (
    <Box component="form">
      <TextField
        label="请输入要加/解密的字符串..."
        multiline
        minRows={10}
        maxRows={16}
        variant="outlined"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        fullWidth
      />
      <div className="flex mt-5">
        <TextField
          label="这里是密钥"
          variant="outlined"
          value={key}
          onChange={(event) => setKey(event.target.value)}
          fullWidth
        />
        <Button
          onClick={handleEncrypt}
          variant="contained"
          size="large"
          className="flex-shrink-0 !ml-3"
        >
          加密
        </Button>
        <Button
          onClick={handleDecrypt}
          variant="contained"
          size="large"
          className="flex-shrink-0 !ml-3"
        >
          解密
        </Button>
        <FormControl
          variant="standard"
          sx={{ minWidth: 120 }}
          className="flex-shrink-0 !ml-3 self-center"
        >
          <InputLabel>加密算法</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="AES">AES</MenuItem>
            <MenuItem value="RC4">RC4</MenuItem>
            <MenuItem value="DES">DES</MenuItem>
            <MenuItem value="TripleDES">TripleDES</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        label="结果"
        className="!mt-5"
        multiline
        minRows={1}
        maxRows={16}
        variant="standard"
        fullWidth
        value={result}
      />
    </Box>
  )
}

export default Encrypt
