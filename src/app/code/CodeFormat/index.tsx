import { html } from '@codemirror/lang-html'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { markdown } from '@codemirror/lang-markdown'
import { php } from '@codemirror/lang-php'
import { xml } from '@codemirror/lang-xml'
import { StreamLanguage } from '@codemirror/language'
import { css } from '@codemirror/legacy-modes/mode/css'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack
} from '@mui/material'
// @ts-ignore
import parserPHP from '@prettier/plugin-php/standalone'
// @ts-ignore
import parserXML from '@prettier/plugin-xml'
import CodeMirror from '@uiw/react-codemirror'
import parserBabel from 'prettier/parser-babel'
import parserGraphQL from 'prettier/parser-graphql'
import parserHTML from 'prettier/parser-html'
import parserMarkDown from 'prettier/parser-markdown'
import parserPostCSS from 'prettier/parser-postcss'
import parserTypeScript from 'prettier/parser-typescript'
import parserYAML from 'prettier/parser-yaml'
import prettier from 'prettier/standalone'
import { useState } from 'react'

import * as Snippets from './codeSnippets'
function CodeFormat() {
  const [code, setCode] = useState("console.log('hello world!')")
  const [lang, setLang] = useState('typescript')

  const onFormat = () => {
    setCode(
      prettier.format(code, {
        parser: lang,
        plugins: [
          parserTypeScript,
          parserGraphQL,
          parserHTML,
          parserMarkDown,
          parserPostCSS,
          parserYAML,
          parserBabel,
          parserPHP,
          parserXML
        ]
      })
    )
  }

  const handleChange = (e: SelectChangeEvent) => {
    setLang(e.target.value)
    setCode((Snippets as any)[e.target.value])
  }

  return (
    <Box component="form">
      <Stack spacing={3} direction="row" mb={2} alignItems="center">
        <Button variant="contained" onClick={onFormat}>
          格式化
        </Button>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel>语言</InputLabel>
          <Select value={lang} onChange={handleChange}>
            <MenuItem value="typescript">JS/TS</MenuItem>
            <MenuItem value="vue">Vue</MenuItem>
            <MenuItem value="json">JSON</MenuItem>
            <MenuItem value="css">CSS</MenuItem>
            <MenuItem value="scss">SCSS</MenuItem>
            <MenuItem value="less">LESS</MenuItem>
            <MenuItem value="html">HTML</MenuItem>
            <MenuItem value="yaml">YAML</MenuItem>
            <MenuItem value="graphql">GraphQL</MenuItem>
            <MenuItem value="markdown">Markdown</MenuItem>
            <MenuItem value="xml">XML</MenuItem>
            <MenuItem value="php">PHP</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <div className="h-75vh shadow-xl shadow-blue-100">
        <CodeMirror
          value={code}
          className="h-full"
          height="100%"
          extensions={[
            javascript({ jsx: true, typescript: true }),
            json(),
            StreamLanguage.define(css),
            xml(),
            markdown(),
            StreamLanguage.define(yaml),
            php(),
            html()
          ]}
          onChange={(value) => {
            setCode(value)
          }}
        />
      </div>
    </Box>
  )
}

export default CodeFormat
