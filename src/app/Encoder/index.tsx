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
import he from 'he'
import * as Base64 from 'js-base64'
import { useState } from 'react'

function Encoder() {
  const [type, setType] = useState('Base64')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [mode, setMode] = useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value)
  }

  const handleEncode = () => {
    switch (type) {
      case 'Base64':
        setResult(Base64.encode(input))
        break
      case 'URL':
        setResult(mode ? window.encodeURIComponent(input) : window.encodeURI(input))
        break
      case 'Unicode':
        setResult(he.encode(input))
        break
      default:
        break
    }
  }

  const handleDecode = () => {
    switch (type) {
      case 'Base64':
        setResult(Base64.decode(input))
        break
      case 'URL':
        setResult(window.decodeURI(input))
        break
      case 'Unicode':
        setResult(he.decode(input))
        break
      default:
        break
    }
  }

  return (
    <Box component="form">
      <TextField
        label="请输入要编/解码的字符串..."
        multiline
        minRows={10}
        maxRows={16}
        variant="standard"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        fullWidth
      />
      <Stack spacing={2} my={3} direction="row">
        <Button onClick={handleEncode} variant="contained" size="large" className="mr-2">
          编码
        </Button>
        <Button onClick={handleDecode} variant="contained" size="large" color="primary">
          解码
        </Button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>编码</InputLabel>
          <Select value={type} onChange={handleChange}>
            <MenuItem value="Base64">Base64</MenuItem>
            <MenuItem value="URL">URL</MenuItem>
            <MenuItem value="Unicode">Unicode</MenuItem>
          </Select>
        </FormControl>
        {type === 'URL' && (
          <FormControlLabel
            control={<Checkbox checked={mode} onChange={(_, checked) => setMode(checked)} />}
            label="全部编码"
          />
        )}
      </Stack>
      <TextField
        label="结果"
        multiline
        minRows={10}
        maxRows={16}
        variant="outlined"
        fullWidth
        value={result}
      />
    </Box>
  )
}

export default Encoder
