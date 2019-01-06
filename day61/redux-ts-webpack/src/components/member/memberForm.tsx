import * as React from 'react'
import { Input, Button } from '../../common/components/form'
import { MemberEntity } from '../../model'

interface Props {
  member: MemberEntity
  onChange: (fieldName: string, value: string) => void
  onSave: () => void
}

export const MemberForm: React.StatelessComponent<Props> = (props) => {
  return (
    // <div className="row">
    //   <h2>Member Page</h2>
    // </div>
    <form>
      <h1>Mange member</h1>
      <Input
        name="login"
        label="Login"
        value={props.member.login}
        onChange={props.onChange}
      />
      <Input
        name="avatar_url"
        label="Avatar Url"
        value={props.member.avatar_url}
        onChange={props.onChange}
      />
      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  )
}