(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{660:function(e,n){e.exports='Select 选择器\n===\n\n当选项过多时，使用下拉菜单展示并选择内容。\n\n```jsx\nimport { Select } from \'uiw\';\n```\n\n### 基础用法\n\n适用广泛的基础单选 `value` 的值为当前被选中的 `Option` 的 `value` 属性值。自定义 `Select` 请查看 [`<Dropdown />`](#/components/dropdown) 组件实例。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col, Select } from \'uiw\';\n\nconst Demo = () => (\n  <Row>\n    <Col fixed>\n      <Select defaultValue="w">\n        <Select.Option value="w">Choose an item...</Select.Option>\n        <Select.Option value="1">One</Select.Option>\n        <Select.Option value="2">Two</Select.Option>\n        <Select.Option value="3">Three</Select.Option>\n        <Select.Option value="4">Four</Select.Option>\n      </Select>\n    </Col>\n  </Row>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 禁用选择器\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col, Select } from \'uiw\';\n\nconst Demo = () => (\n  <Row>\n    <Col fixed>\n      <Select disabled defaultValue="3">\n        <Select.Option value="w">Choose an item...</Select.Option>\n        <Select.Option value="1">One</Select.Option>\n        <Select.Option value="2">Two</Select.Option>\n        <Select.Option value="3">Three</Select.Option>\n        <Select.Option value="4">Four</Select.Option>\n      </Select>\n    </Col>\n  </Row>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 尺寸\n\n通过 `size` 属性设置选择器的尺寸，提供三个尺寸参数设置。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col, Select, Button } from \'uiw\';\n\nconst rowSty = { marginBottom: 10 };\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Select size="small" disabled defaultValue="3" style={rowSty}>\n          <Select.Option value="w">Choose an item...</Select.Option>\n          <Select.Option value="1">One</Select.Option>\n          <Select.Option value="2">Two</Select.Option>\n          <Select.Option value="3">Three</Select.Option>\n          <Select.Option value="4">Four</Select.Option>\n        </Select>\n      </Col>\n      <Col fixed>\n        <Button size="small">小尺寸</Button>\n      </Col>\n    </Row>\n    <Row gutter={10} style={rowSty}>\n      <Col fixed>\n        <Select defaultValue="3">\n          <Select.Option value="w">Choose an item...</Select.Option>\n          <Select.Option value="1">One</Select.Option>\n          <Select.Option value="2">Two</Select.Option>\n          <Select.Option value="3">Three</Select.Option>\n          <Select.Option value="4">Four</Select.Option>\n        </Select>\n      </Col>\n      <Col fixed>\n        <Button size="default">默认尺寸</Button>\n      </Col>\n    </Row>\n    <Row gutter={10}>\n      <Col fixed>\n        <Select size="large" defaultValue="3">\n          <Select.Option value="w">Choose an item...</Select.Option>\n          <Select.Option value="1">One</Select.Option>\n          <Select.Option value="2">Two</Select.Option>\n          <Select.Option value="3">Three</Select.Option>\n          <Select.Option value="4">Four</Select.Option>\n        </Select>\n      </Col>\n      <Col fixed>\n        <Button size="large">大尺寸</Button>\n      </Col>\n    </Row>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 选项组\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col, Select } from \'uiw\';\n\nconst Demo = () => (\n  <Row>\n    <Col fixed>\n      <Select defaultValue="w">\n        <Select.Option value="w">Choose an item...</Select.Option>\n        <Select.Group label="Group 1">\n          <Select.Option value="1">One</Select.Option>\n          <Select.Option value="2">Two</Select.Option>\n        </Select.Group>\n        <Select.Group label="Group 2">\n          <Select.Option value="3">Three</Select.Option>\n          <Select.Option value="4">Four</Select.Option>\n        </Select.Group>\n      </Select>\n    </Col>\n  </Row>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 在表单中使用\n\n在 [`<Form />`](#/components/form) 表单中应用 [`<Select />`](#/components/select) 组件\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Row, Col, Select, Button, Notify } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      onSubmit={({initial, current}) => {\n        const errorObj = {};\n        if (!current.selectField) {\n          errorObj.selectField = \'默认需要选择内容，选择入内容\';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          Notify.error({ title: \'提交失败！\', description: \'请确认提交表单是否正确！\' });\n          throw err;\n        }\n        Notify.success({\n          title: \'提交成功！\',\n          description: `表单提交成功，选择值为：${current.selectField}，将自动填充初始化值！`,\n        });\n      }}\n      fields={{\n        selectField: {\n          children: (\n            <Select>\n              <Select.Option value="w">Choose an item...</Select.Option>\n              <Select.Option value="1">One</Select.Option>\n              <Select.Option value="2">Two</Select.Option>\n              <Select.Option value="3">Three</Select.Option>\n              <Select.Option value="4">Four</Select.Option>\n            </Select>\n          )\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col fixed>{fields.selectField}</Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### HTML select\n\n这个组件是最简单的基础样式组件，可以直接引用样式，使用 `w-select` 纯样式即可达到效果，下拉框右边箭头效果通过样式更改，通过 [`b64`](http://b64.io/) 工具，转换成 `base64` 格式。\n\n```jsx\nimport \'uiw/lib/esm/select/style/index.less\';\n```\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col, Select } from \'uiw\';\n\nconst Demo = () => (\n  <Row style={{ backgroundColor: \'#fff\', margin: -15, padding: 15, borderRadius: \'5px 5px 0 0\' }} gutter={10}>\n    <Col fixed>\n      <select className="w-select" defaultValue="w">\n        <option value="w">Choose an item...</option>\n        <option value="1">One</option>\n        <option value="2">Two</option>\n        <option value="3">Three</option>\n        <option value="4">Four</option>\n      </select>\n    </Col>\n    <Col fixed>\n      <select disabled className="w-select" defaultValue="w">\n        <option value="w">Choose an item...</option>\n        <option value="1">One</option>\n        <option value="2">Two</option>\n        <option value="3">Three</option>\n        <option value="4">Four</option>\n      </select>\n    </Col>\n  </Row>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Select\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 控制时 `select` 的值必须与 `onChange` 函数一起使用才能更新 `select` 的值 | Any | - |\n| disabled | 禁用选择器 | Boolean | `false` |\n| defaultValue | 根据 `value` 进行比较，判断是否选中 | Any | - |\n| size | 选择框尺寸 | Enum {`large`, `default`, `small` } | `default` |\n'}}]);