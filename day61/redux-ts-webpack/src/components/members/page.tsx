import * as React from 'react'
import { MemberEntity } from '../../model'
import { memberAPI } from '../../api/member'
import { MemberHeader } from './memberHeader'
import { MemberRow } from './memberRow'
import { Link } from 'react-router-dom'

interface State {
  members: MemberEntity[]
}

interface Props {

}

// // 没有state
// export const MembersPage: React.StatelessComponent<{}> = () => {
//   return (
//     <div className="row">
//       <h2>Members Page</h2>
//     </div>
//   )
// }

export class MembersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  }

  public componentDidMount() {
    memberAPI.fecthMembersAsync()
      .then(members => {
        this.setState({
          members
        })
      })
  }

  public render() {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            {/* {MemberHeader()} */}
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.state.members.map(member => <MemberRow key={member.id} member={member} />)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

/* const MemberHeader = () => {
  return (
    <tr>
      <td>Avatar</td>
      <td>Id</td>
      <td>Name</td>
    </tr>
  )
}

const MemberRow = (member: MemberEntity) => {
  return (
    <tr key={member.id}>
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  )
} */