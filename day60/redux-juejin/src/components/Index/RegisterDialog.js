import React, { Component } from 'react';
import { Dialog, Input, Button, Form } from 'element-react';

export default class RegisterDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        password: ''
      },
      loading: false
    }
  }

  handleSubmit = (e) => {
    console.log(this.state.user)
    e.preventDefault()
    this.refs.user.validate((valid) => {
      // 自己去connect dispatch?
      // 注册 还有登录
      // 交给父组件 Header connect
      if(valid) {
        this.props.registerActions(this.state.user)
        this.setState({
          loading: true
        })
      }
    })
  }
  handleChange = (key, value) => {
    this.setState({
      user: Object.assign(this.state.user, { [key]: value })
    })
  }

  render() {
    return (
      <Dialog
        size="tiny"
        title="注册"
        top="30%"
        customClass="register-dialog"
        visible={this.props.visible}
        onCancel={this.props.onClose}
        closeOnClickModal={false}
      >
        <Dialog.Body>
          <Form ref="user" model={this.state.user}>
            <Form.Item required={true} prop="username"
              rules={{ required: true, message: '用户名不能为空', trigger: 'blur' }}
            >
              <Input value={this.state.user.username} placeholder="请输入用户名"
                onChange={this.handleChange.bind(this, 'username')} />
            </Form.Item>
            <Form.Item required={true} prop="email"
              rules={{ type: 'email', required: true, message: '邮箱不能为空或格式不正确', trigger: 'blur' }}
            >
              <Input value={this.state.user.email} placeholder="请填写邮箱"
                onChange={this.handleChange.bind(this, 'email')} />
            </Form.Item>
            <Form.Item required={true} prop="password"
              rules={{ required: true, message: '密码不能为空', trigger: 'blur' }}
            >
              <Input type="password" value={this.state.user.password} placeholder="请输入密码"
                onChange={this.handleChange.bind(this, 'password')} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}
                loading={this.state.loading}
              >注册
              </Button>
            </Form.Item>
          </Form>
        </Dialog.Body>
      </Dialog>
    )
  }
}
