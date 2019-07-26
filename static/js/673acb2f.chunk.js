(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{673:function(n,e){n.exports="Textarea 多行文本输入框\n===\n\n标准的多行文本输入框。\n\n```jsx\nimport { Textarea } from 'uiw';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Textarea } from 'uiw';\n\nconst Demo = () => (\n  <div style={{ maxWidth: 300 }}>\n    <Textarea placeholder=\"请输入内容\" />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 在表单中使用\n\n在 [`<Form />`](#/components/form) 表单中应用 [`<Textarea />`](#/components/textarea) 组件\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Row, Col, Textarea, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      onSubmit={({initial, current}) => {\n        const errorObj = {};\n        if (!current.commit) {\n          errorObj.commit = '内容为空，请输入内容';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });\n          throw err;\n        }\n        Notify.success({\n          title: '提交成功！',\n          description: `表单提交成功，内容为：${current.commit}，将自动填充初始化值！`,\n        });\n      }}\n      fields={{\n        commit: {\n          children: <Textarea placeholder=\"请输入说明内容\" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col style={{ maxWidth: 300 }}>{fields.commit}</Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">提交</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 禁用\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Textarea } from 'uiw';\n\nconst Demo = () => (\n  <div style={{ maxWidth: 300 }}>\n    <Textarea placeholder=\"请输入内容\" disabled />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### HTML Textarea\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Textarea } from 'uiw';\n\nconst Demo = () => (\n  <div style={{ maxWidth: 300 }}>\n    <textarea className=\"w-textarea\" placeholder=\"请输入内容\" defaultValue=\"\" />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n这是一个标准组件，与 HTML 中属性保持一致。\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| placeholder | 规定描述文本区域预期值的简短提示。 | String | - |\n| disabled | 禁用输入框 | Boolean | - |"}}]);