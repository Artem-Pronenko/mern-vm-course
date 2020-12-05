import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {

  if (!links.length) {
    return <p className="center">У вас нет ссылок</p>
  }

  return (
    <table className="striped">
      <thead>
      <tr>
        <th>№</th>
        <th>Полная ссыка</th>
        <th>Сокращенная ссылка</th>
        <th>Статистика</th>
      </tr>
      </thead>

      <tbody>
      {links.map((link, i) => {
        return (
          <tr key={link._id}>
            <td>{i + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Открыть</Link>
            </td>
          </tr>
        )
      })}

      </tbody>
    </table>
  )
}
