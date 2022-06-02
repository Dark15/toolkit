import styled from '@emotion/styled'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField
} from '@mui/material'
import CryptoJS from 'crypto-js'
import { useCallback, useMemo, useState } from 'react'
import { DropzoneState, useDropzone } from 'react-dropzone'

const getColor = (props: DropzoneState) => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isFocused) {
    return '#2196f3'
  }
  return '#d0e3f7'
}

const Container = styled.div<DropzoneState>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #eef5ff;
  color: #a09b9b;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`

function FileHash() {
  const [file, setFile] = useState<File>()
  const [hash, setHash] = useState<string>('')
  const [type, setType] = useState('MD5')
  const [loading, setLoading] = useState(false)
  const [fileReaderResult, setFileReaderResult] = useState<any>(null)
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        setFileReaderResult(reader.result)
      }
      setFile(file)
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const fileSize = useMemo(() => {
    if (!file) return ''

    if (file.size < 1024) {
      return `${file.size} B`
    } else if (file.size < 1024 ** 2) {
      return `${(file.size / 1024).toFixed(1)} KB`
    } else if (file.size < 1024 ** 3) {
      return `${(file.size / 1024 ** 2).toFixed(1)} MB`
    } else if (file.size < 1024 ** 4) {
      return `${(file.size / 1024 ** 3).toFixed(1)} GB`
    } else {
      return `${(file.size / 1024 ** 4).toFixed(1)} TB`
    }
  }, [file])

  const dropzone = useDropzone({ onDrop })
  const handleHash = () => {
    setLoading(true)
    if (!file) return
    if (file.size > 2048 ** 2) {
      setTimeout(() => {
        setHash(
          (CryptoJS as any)
            [type](CryptoJS.lib.WordArray.create(fileReaderResult))
            .toString(CryptoJS.enc.Hex)
        )
        setLoading(false)
      }, 500)
    } else {
      setHash(
        (CryptoJS as any)
          [type](CryptoJS.lib.WordArray.create(fileReaderResult))
          .toString(CryptoJS.enc.Hex)
      )
      setLoading(false)
    }
  }

  return (
    <Box component="form">
      {file && (
        <Stack spacing={2} direction="row" my={2}>
          <Chip label={fileSize} variant="outlined" onClick={() => {}} className="shadow"></Chip>
          <Chip
            label={file.type || 'unknown'}
            variant="outlined"
            onClick={() => {}}
            className="shadow"
          ></Chip>
        </Stack>
      )}

      <Container {...dropzone.getRootProps(dropzone)}>
        <input {...dropzone.getInputProps()} />
        <p>{file ? file.name : 'drop some files here, or click to select files'}</p>
      </Container>
      <Stack direction="row" spacing={2} alignItems="center" my={2}>
        <LoadingButton
          onClick={handleHash}
          variant="contained"
          size="large"
          loading={loading}
          disabled={!file}
        >
          哈希
        </LoadingButton>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel>散列算法</InputLabel>
          <Select value={type} onChange={(e: SelectChangeEvent) => setType(e.target.value)}>
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
      </Stack>

      <TextField
        label="结果"
        multiline
        minRows={1}
        maxRows={16}
        variant="standard"
        fullWidth
        value={hash}
      />
    </Box>
  )
}

export default FileHash
