import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField
} from '@mui/material'
import CryptoJS from 'crypto-js'
import { useState } from 'react'

function StringHash() {
  const [type, setType] = useState('MD5')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [mode, setMode] = useState(false)
  const [key, setKey] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value)
  }

  const handleHash = () => {
    switch (type) {
      case 'MD5':
        setResult(mode ? CryptoJS.HmacMD5(input, key).toString() : CryptoJS.MD5(input).toString())
        break
      case 'SHA1':
        setResult(mode ? CryptoJS.HmacSHA1(input, key).toString() : CryptoJS.SHA1(input).toString())
        break
      case 'SHA256':
        setResult(
          mode ? CryptoJS.HmacSHA256(input, key).toString() : CryptoJS.SHA256(input).toString()
        )
        break
      case 'SHA512':
        setResult(
          mode ? CryptoJS.HmacSHA512(input, key).toString() : CryptoJS.SHA512(input).toString()
        )
        break
      case 'SHA224':
        setResult(
          mode ? CryptoJS.HmacSHA224(input, key).toString() : CryptoJS.SHA224(input).toString()
        )
        break
      case 'SHA384':
        setResult(
          mode ? CryptoJS.HmacSHA384(input, key).toString() : CryptoJS.SHA384(input).toString()
        )
        break
      case 'SHA3':
        setResult(mode ? CryptoJS.HmacSHA3(input, key).toString() : CryptoJS.SHA3(input).toString())
        break
      case 'RIPEMD160':
        setResult(
          mode
            ? CryptoJS.HmacRIPEMD160(input, key).toString()
            : CryptoJS.RIPEMD160(input).toString()
        )
        break
      default:
        break
    }
  }
  CryptoJS.MD5(input).toString()

  return (
    <Box component="form">
      <TextField
        label="请输入要哈希的字符串..."
        multiline
        minRows={10}
        maxRows={16}
        variant="outlined"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        fullWidth
      />
      <Stack spacing={2} my={3} direction="row">
        <Button
          onClick={handleHash}
          variant="contained"
          size="large"
          className="mr-2 flex-shrink-0"
        >
          哈希
        </Button>
        <Button
          onClick={() => setResult('')}
          variant="contained"
          size="large"
          className="mr-2 flex-shrink-0"
        >
          清空结果
        </Button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>散列算法</InputLabel>
          <Select value={type} onChange={handleChange}>
            <MenuItem value="MD5">MD5</MenuItem>
            <MenuItem value="SHA1">SHA1</MenuItem>
            <MenuItem value="SHA224">SHA224</MenuItem>
            <MenuItem value="SHA256">SHA256</MenuItem>
            <MenuItem value="SHA3">SHA3</MenuItem>
            <MenuItem value="SHA384">SHA384</MenuItem>
            <MenuItem value="SHA512">SHA512</MenuItem>
            <MenuItem value="RIPEMD160">RIPEMD160</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox checked={mode} onChange={(_, checked) => setMode(checked)} />}
          label="HMAC"
        />
        {mode && (
          <TextField
            label="请输入密钥..."
            variant="outlined"
            value={key}
            className="!max-h-48px"
            onChange={(event) => setKey(event.target.value)}
            fullWidth
          />
        )}
      </Stack>
      <TextField
        label="结果"
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

export default StringHash
